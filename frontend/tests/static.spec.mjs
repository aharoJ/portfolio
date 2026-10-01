import { expect, test } from '@playwright/test';

test('article opens directly as readable static HTML without JavaScript', async ({ page }) => {
  const response = await page.goto('/articles/first/');
  expect(response.status()).toBe(200);
  await expect(page).toHaveTitle('Start with the reader | Portfolio');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content', 'A short note on giving an idea room to be understood.',
  );
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Start with the reader');
  await expect(page.getByText('A small beginning is enough.', { exact: false })).toBeVisible();
  await expect(page.locator('script, astro-island, astro-server-island')).toHaveCount(0);
  await page.getByRole('link', { name: 'Back to all articles' }).click();
  await expect(page).toHaveURL('/');
});

test('index article link navigates to the static article', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Notes on building');
  await page.getByRole('link', { name: 'Start with the reader' }).click();
  await expect(page).toHaveURL('/articles/first/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Start with the reader');
});
