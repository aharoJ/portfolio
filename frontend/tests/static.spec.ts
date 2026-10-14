import { test, expect } from "@playwright/test";

const paths = ["/", "/projects/", "/harness-research/", "/university-work/", "/articles/first/"];
for (const width of [1512, 390, 320])
  for (const colorScheme of ["light", "dark"] as const) {
    test(`${width} ${colorScheme}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.emulateMedia({ colorScheme });
      const requests: string[] = [];
      page.on("request", (request) => requests.push(request.url()));
      for (const path of paths) {
        expect((await page.goto(path))?.status()).toBe(200);
        await expect(page.locator("h1")).toHaveCount(1);
        expect((await page.locator("body").boundingBox())?.width).toBe(Math.min(width, 584));
        for (const link of await page.locator('a[href^="/"]').all()) {
          expect(paths).toContain(await link.getAttribute("href"));
        }
        await page.keyboard.press("Tab");
        await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
        await page.keyboard.press("Enter");
        await expect(page.locator("main")).toBeFocused();
        await expect(page.locator("script,img,iframe")).toHaveCount(0);
        await page.screenshot({
          path: `test-results/screenshots/${width}-${colorScheme}-${path.replaceAll("/", "_")}.png`,
        });
        await page.evaluate(() => {
          const style = document.createElement("style");
          style.textContent =
            ":root{font-size:200%}*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}";
          document.head.append(style);
        });
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
          true,
        );
      }
      expect(
        requests.every((url) => /^http:\/\/127\.0\.0\.1:\d+\/(?:.*\/|.*\.css)?$/.test(url)),
      ).toBe(true);
    });
  }
