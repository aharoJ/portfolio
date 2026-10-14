import { test } from "node:test";
import assert from "node:assert/strict";
import {
  articleSchema,
  calendarDate,
  inventoryKeys,
  selectPublic,
} from "../src/lib/article-contract.ts";

const sample = { title: "Title", description: "Description", status: "sample" };
const published = {
  ...sample,
  status: "published",
  date: "2026-01-01",
  section: "projects",
};
test("strict branches", () => {
  for (const data of [sample, published, { ...sample, status: "draft" }]) {
    assert.ok(articleSchema.safeParse(data).success);
  }
  for (const patch of [
    { title: "" },
    { description: 42 },
    { extra: true },
    { status: "unknown" },
    { date: null },
    { section: "projects" },
    { status: "published" },
  ]) {
    assert.equal(articleSchema.safeParse({ ...sample, ...patch }).success, false);
  }
  assert.equal(articleSchema.safeParse({ ...published, date: "2026-02-30" }).success, false);
});
test("Dates and source keys", () => {
  for (const date of ["0000-02-29", "2000-02-29", "2024-02-29", "9999-12-31"]) {
    assert.ok(calendarDate(date));
  }
  for (const date of ["1900-02-29", "2023-02-29", "2026-02-30", "2026-13-01", "26-01-01"]) {
    assert.equal(calendarDate(date), false);
  }
  assert.deepEqual(inventoryKeys(["first.md"]), ["first"]);
  for (const names of [["First.md"], ["nested/a.md"], ["a.mdx"], ["a.md", "a.md"]]) {
    assert.throws(() => inventoryKeys(names));
  }
});
test("public selection, section filtering and stable date/key ordering", () => {
  const entry = (id: string, data: unknown) => ({
    id,
    data: articleSchema.parse(data),
  });
  const entries = [
    entry("sample", sample),
    entry("draft", { ...sample, status: "draft" }),
    entry("b", published),
    entry("a", published),
    entry("future", {
      ...published,
      date: "2099-01-01",
      section: "university-work",
    }),
  ];
  assert.deepEqual(
    selectPublic(entries).map((e) => e.id),
    ["future", "a", "b", "sample"],
  );
  assert.deepEqual(
    selectPublic(entries, "projects").map((e) => e.id),
    ["a", "b"],
  );
});
