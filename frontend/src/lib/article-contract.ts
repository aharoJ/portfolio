import { z } from "astro/zod";
export function calendarDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const year = Number(value.slice(0, 4)),
    month = Number(value.slice(5, 7)),
    day = Number(value.slice(8, 10));
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
    month - 1
  ];
  return days !== undefined && day >= 1 && day <= days;
}
// Four-digit proleptic Gregorian years 0000–9999; validation is not provenance.
const text = z.string().trim().min(1);
const date = z
  .string()
  .refine(calendarDate, "Expected genuine Gregorian YYYY-MM-DD");
const section = z.enum(["projects", "harness-research", "university-work"]);
const common = { title: text, description: text };
export const articleSchema = z.discriminatedUnion("status", [
  z.object({ ...common, status: z.literal("sample") }).strict(),
  z
    .object({ ...common, status: z.literal("published"), date, section })
    .strict(),
  z
    .object({
      ...common,
      status: z.literal("draft"),
      date: date.optional(),
      section: section.optional(),
    })
    .strict(),
]);
export type ArticleData = z.infer<typeof articleSchema>;
export function sourceKey(name: string): string {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(name))
    throw new Error(`Unsupported article source name: ${name}`);
  return name.slice(0, -3);
}
export function inventoryKeys(names: string[]): string[] {
  const keys = names.map(sourceKey);
  if (new Set(keys).size !== keys.length)
    throw new Error("Duplicate article source key");
  return keys;
}
export function selectPublic<T extends { id: string; data: ArticleData }>(
  entries: T[],
  sectionId?: string,
): T[] {
  const ascii = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0);
  return entries
    .filter(
      (e) =>
        e.data.status !== "draft" &&
        (!sectionId ||
          (e.data.status === "published" && e.data.section === sectionId)),
    )
    .sort((a, b) => {
      if (a.data.status === "published" && b.data.status === "published")
        return ascii(b.data.date, a.data.date) || ascii(a.id, b.id);
      if (a.data.status !== b.data.status)
        return a.data.status === "published" ? -1 : 1;
      return ascii(a.id, b.id);
    });
}
