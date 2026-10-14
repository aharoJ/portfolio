// Honest-mistake guard: drafts, resources, budgets and failed checks.
// Hostile filesystems (including .astro/dist symlinks), crafted markup/
// data-href decoys and late signals are outside this local guard's scope.
import { readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { gzipSync } from "node:zlib";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = resolve(root, "dist");
const receipt = resolve(root, ".astro/output-acceptance.json");
let child: ReturnType<typeof spawn> | undefined;
function clean() {
  rmSync(receipt, { force: true });
  rmSync(dist, { recursive: true, force: true });
}
for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.on(signal, () => child?.kill(signal));
}
async function run(command: string) {
  await new Promise<void>((done, fail) => {
    child = spawn(process.execPath, ["node_modules/astro/bin/astro.mjs", command], {
      cwd: root,
      stdio: "inherit",
    });
    child.once("error", fail);
    child.once("exit", (code) =>
      code === 0 ? done() : fail(new Error(`astro ${command} failed`)),
    );
  });
}
function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(dir, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}
function checkCss(css: string) {
  if (/@import|@font-face|\b(?:url|image|(?:-webkit-)?image-set)\s*\(/i.test(css)) {
    throw new Error("CSS resource emitted");
  }
}
try {
  clean();
  // prettier-ignore
  const retired = /Angel Jair Haro|aharoJ|portrait\.png|portfolio\.mjs|\b(?:skills|projects)\s*=\s*\[/;
  const owned = [
    ...files(resolve(root, "src")),
    ...files(resolve(root, "tools")),
    ...files(resolve(root, "tests")),
    ...readdirSync(root)
      .filter((name) => /\.(?:[cm]?js|jsx|ts)$/.test(name))
      .map((name) => resolve(root, name)),
  ];
  for (const path of owned) {
    if (/\.(?:[cm]?js|jsx)$/.test(path)) throw new Error(`Owned JavaScript: ${path}`);
    if (relative(root, path).startsWith("tests/")) continue;
    let source = readFileSync(path, "utf8");
    if (path === fileURLToPath(import.meta.url))
      source = source.replace(/^  const retired =.*$/m, "");
    if (retired.test(source)) throw new Error(`Retired source: ${path}`);
  }
  const inventoryPath = resolve(root, ".astro/output-inventory.json");
  rmSync(inventoryPath, { force: true });
  await run("check");
  await run("build");
  const inventory: { publicIds: string[]; draftIds: string[]; draftBodies: string[] } = JSON.parse(
    readFileSync(inventoryPath, "utf8"),
  );
  const expected = [
    "index.html",
    "projects/index.html",
    "harness-research/index.html",
    "university-work/index.html",
    ...inventory.publicIds.map((id) => `articles/${id}/index.html`),
  ].sort();
  const actual = files(dist).map((path) => relative(dist, path));
  if (JSON.stringify(actual.sort()) !== JSON.stringify(expected)) {
    throw new Error("Unexpected HTML routes");
  }
  const inlineStyles = new Set<string>();
  const budgets = [];
  for (const path of actual) {
    const source = readFileSync(resolve(dist, path), "utf8");
    if (retired.test(source)) throw new Error(`Unexpected output: ${path}`);
    const text = source
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (inventory.draftIds.some((id) => source.includes(`href="/articles/${id}/`)))
      throw new Error("Draft link emitted");
    if (inventory.draftBodies.some((body) => text.includes(body)))
      throw new Error("Draft body emitted");
    if (
      /<(?:script|link|img|svg|iframe|object|embed|video|audio|source|base|form)\b|<[^>]*\s(?:src|srcset|poster|background|style|http-equiv|on\w+)\s*=/i.test(
        source,
      )
    )
      throw new Error("Active HTML resource");
    const inline = [...source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
      .map((m) => m[1] ?? "")
      .join("");
    checkCss(inline);
    inlineStyles.add(inline);
    const raw = Buffer.byteLength(source),
      gzip = gzipSync(source, { level: 9 }).length;
    if (raw > 30000 || gzip > 10000) throw new Error(`HTML budget exceeded: ${path}`);
    budgets.push({
      path,
      raw,
      gzip,
      css: Buffer.byteLength(inline),
      combinedRaw: raw,
    });
  }
  const cssCorpus = [...inlineStyles].reduce((sum, s) => sum + Buffer.byteLength(s), 0);
  if (cssCorpus > 6000) throw new Error("CSS budget exceeded");
  writeFileSync(
    receipt,
    JSON.stringify({ status: "PASS", expected, actual, cssCorpus, budgets }, null, 2),
  );
} catch (error) {
  clean();
  console.error(error);
  process.exitCode = 1;
}
