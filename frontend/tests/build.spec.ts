import { test } from "node:test";
import assert from "node:assert/strict";
import {
  mkdtempSync,
  cpSync,
  symlinkSync,
  writeFileSync,
  existsSync,
  readdirSync,
  readFileSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
test("draft exclusion and failed-check cleanup", () => {
  const fixture = mkdtempSync(resolve(tmpdir(), "portfolio-build-"));
  try {
    for (const name of [
      "src",
      "tools",
      "tests",
      "astro.config.ts",
      "playwright.config.ts",
      "tsconfig.json",
      "package.json",
    ]) {
      cpSync(resolve(root, name), resolve(fixture, name), { recursive: true });
    }
    symlinkSync(resolve(root, "node_modules"), resolve(fixture, "node_modules"));
    writeFileSync(
      resolve(fixture, "src/content/articles/private.md"),
      "---\ntitle: Private\ndescription: Private description\nstatus: draft\n---\nPRIVATE_BUILD_SENTINEL\n\nSecond paragraph.\n",
    );
    const page = resolve(fixture, "src/layouts/Page.astro");
    writeFileSync(
      page,
      readFileSync(page, "utf8").replace("<slot />", "<slot /><p>Plain style = value text.</p>"),
    );
    const build = () =>
      spawnSync(process.execPath, ["tools/build.ts"], {
        cwd: fixture,
        encoding: "utf8",
      });
    const valid = build();
    assert.equal(valid.status, 0, valid.stdout + valid.stderr);
    assert.equal(existsSync(resolve(fixture, "dist/articles/private")), false);
    const dist = resolve(fixture, "dist");
    for (const name of readdirSync(dist, { recursive: true, encoding: "utf8" })) {
      if (/\.(html|css)$/.test(name)) {
        assert.equal(
          readFileSync(resolve(dist, name), "utf8").includes("PRIVATE_BUILD_SENTINEL"),
          false,
        );
      }
    }
    const article = resolve(fixture, "src/layouts/Page.astro");
    const original = readFileSync(article, "utf8");
    for (const leak of [
      '<a href="/articles/private/">Private</a>',
      "<p>PRIVATE_BUILD_SENTINEL</p>",
    ]) {
      writeFileSync(article, original.replace("<slot />", "<slot />" + leak));
      const rejected = build();
      assert.notEqual(rejected.status, 0, `Rejected draft leak: ${leak}`);
      assert.match(rejected.stdout + rejected.stderr, /Draft (link|body) emitted/);
    }
    writeFileSync(article, original);
    assert.equal(build().status, 0, "Restored control before failed-check cleanup");
    writeFileSync(resolve(fixture, "src/broken.ts"), "const broken: string = 123;\n");
    const failed = build();
    assert.notEqual(failed.status, 0);
    assert.match(failed.stdout + failed.stderr, /broken\.ts/);
    assert.equal(existsSync(resolve(fixture, "dist")), false);
    assert.equal(existsSync(resolve(fixture, ".astro/output-acceptance.json")), false);
  } finally {
    rmSync(fixture, { recursive: true, force: true });
    const result = spawnSync(process.execPath, ["tools/build.ts"], {
      cwd: root,
      stdio: "inherit",
    });
    assert.equal(result.status, 0, "Production rebuild");
  }
});
