import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { readdirSync, lstatSync, mkdirSync, writeFileSync } from "node:fs";
import { articleSchema, inventoryKeys, selectPublic, sourceKey } from "./lib/article-contract.ts";
const base = new URL("./content/articles/", import.meta.url);
const names = readdirSync(base);
for (const name of names)
  if (!lstatSync(new URL(name, base)).isFile())
    throw new Error(`Unsupported article source: ${name}`);
const keys = inventoryKeys(names);
const loader = glob({
  pattern: "*.md",
  base,
  generateId: ({ entry }) => sourceKey(entry),
});
const load = loader.load;
loader.load = async (context) => {
  // Revalidate every build, including cached entries; built-in parsing/schema owns YAML.
  context.store.clear();
  await load(context);
  const entries = [...context.store.values()].map((e) => ({
    id: e.id,
    data: articleSchema.parse(e.data),
    body: (e.rendered?.html ?? "")
      .split(/<\/(?:p|h[1-6]|li|pre)>/i)
      .map((part) =>
        part
          .replace(/<[^>]*>/g, " ")
          .replace(/\s+/g, " ")
          .trim(),
      )
      .filter(Boolean),
  }));
  if (entries.length !== keys.length || entries.some((e) => !keys.includes(e.id)))
    throw new Error("Loaded article identity inventory mismatch");
  mkdirSync(new URL("../.astro/", import.meta.url), { recursive: true });
  const publicEntries = selectPublic(entries);
  writeFileSync(
    new URL("../.astro/output-inventory.json", import.meta.url),
    JSON.stringify({
      publicIds: publicEntries.map((e) => e.id),
      publishedSections: [
        ...new Set(
          publicEntries.flatMap((e) => (e.data.status === "published" ? [e.data.section] : [])),
        ),
      ],
      draftIds: entries.filter((e) => e.data.status === "draft").map((e) => e.id),
      draftBodies: entries
        .filter((e) => e.data.status === "draft")
        .flatMap((e) => e.body)
        .filter((body) => body && !publicEntries.some((e) => e.body.join(" ").includes(body))),
    }),
  );
};
export const collections = {
  articles: defineCollection({ loader, schema: articleSchema }),
};
