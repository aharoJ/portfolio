import { expect, test } from '@playwright/test';
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { identity, skills, projects } from '../src/data/portfolio.mjs';

function checkPortraitBody(body) {
  expect(body.length).toBeLessThanOrEqual(150000);
  expect(body.subarray(0, 4).toString()).toBe('RIFF');
  expect(body.subarray(8, 12).toString()).toBe('WEBP');
  expect(body.readUInt32LE(4) + 8).toBe(body.length);
  let offset = 12;
  let pixels = 0;
  while (offset < body.length) {
    expect(offset + 8).toBeLessThanOrEqual(body.length);
    const chunk = body.subarray(offset, offset + 4).toString();
    const size = body.readUInt32LE(offset + 4);
    expect(offset + 8 + size + (size % 2)).toBeLessThanOrEqual(body.length);
    // Only still-image chunks: metadata, animation and unknown payloads fail.
    expect(['VP8X', 'VP8 ', 'VP8L', 'ALPH']).toContain(chunk);
    if (chunk === 'VP8X') {
      expect(size).toBe(10);
      expect(body[offset + 8] & 0x2e).toBe(0); // ICC, EXIF, XMP or animation flags.
    }
    if (chunk === 'VP8 ' || chunk === 'VP8L') pixels++;
    offset += 8 + size + (size % 2);
  }
  expect(offset).toBe(body.length);
  expect(pixels).toBe(1);
}

test('complete emitted portrait inventory meets admission limits', async ({}, testInfo) => {
  const root = new URL('../dist/', import.meta.url);
  const files = await readdir(root, { recursive: true, withFileTypes: true });
  const images = new Map();
  const referenced = new Set();
  for (const file of files) {
    expect(file.isSymbolicLink()).toBe(false);
    if (!file.isFile()) continue;
    const path = `${file.parentPath}/${file.name}`;
    const body = await readFile(path);
    if (file.name.endsWith('.html')) {
      for (const match of body.toString().matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) referenced.add(match[1]);
    } else {
      expect(file.name).toMatch(/^portrait\.[A-Za-z0-9_-]+\.webp$/);
      checkPortraitBody(body);
      images.set(`/${path.slice(fileURLToPath(root).length)}`, body.length);
    }
  }
  expect(images.size).toBeGreaterThan(0);
  expect(images.size).toBeLessThanOrEqual(2);
  expect([...images.values()].reduce((sum, bytes) => sum + bytes, 0)).toBeLessThanOrEqual(1000000);
  expect([...images.keys()].sort()).toEqual([...referenced].sort());
  await testInfo.attach('emitted-image-inventory', { body: JSON.stringify(Object.fromEntries(images)), contentType: 'application/json' });
});
const routes = ['/', '/about/', '/projects/', '/articles/', '/articles/first/'];
const nav = ['/', '/about/', '/projects/', '/articles/'];
const headings = [identity.name, identity.name, 'Projects', 'Articles', 'Start with the reader'];
for (const width of [320, 1280]) for (const dpr of [1, 2]) for (const [index, route] of routes.entries()) {
  test(`${route} no-JS width=${width} DPR=${dpr}`, async ({ browser, baseURL }, testInfo) => {
    const context = await browser.newContext({ baseURL, javaScriptEnabled: false, viewport: { width, height: 900 }, deviceScaleFactor: dpr });
    const page = await context.newPage();
    const bodies = new Map(); const pending = [];
    const collect = response => {
      if (response.request().resourceType() === 'image' && response.status() === 200) pending.push(response.body().then(body => ({ url: response.url(), type: response.headers()['content-type'], body })));
    };
    page.on('response', collect);
    const response = await page.goto(route, { waitUntil: 'networkidle' });
    expect(response.status()).toBe(200);
    await expect(page.locator('main h1')).toHaveText(headings[index]);
    await expect(page).toHaveTitle(new RegExp('\\| Portfolio$'));
    expect(await page.locator('meta[name="description"]').getAttribute('content')).toBeTruthy();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('header, main, footer')).toHaveCount(3);
    await expect(page.locator('script, astro-island, astro-server-island')).toHaveCount(0);
    const active = page.locator('nav [aria-current]'); await expect(active).toHaveCount(1);
    await expect(active).toHaveAttribute('href', route === '/articles/first/' ? '/articles/' : route);
    await expect(active).toHaveAttribute('aria-current', route === '/articles/first/' ? 'location' : 'page');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.evaluate(async () => { await Promise.all([...document.images].map(image => image.decode())); });
    for (const image of await Promise.all(pending)) {
      expect(image.type).toMatch(/^image\/webp(?:;|$)/);
      checkPortraitBody(image.body);
      bodies.set(image.url, image.body.length);
    }
    page.off('response', collect);
    const bytes = [...bodies.values()].reduce((a,b) => a+b,0); expect(bytes).toBeLessThanOrEqual(600000);
    expect(bodies.size).toBe(route === '/about/' ? 1 : 0);
    if (route === '/about/') {
      await expect(page.locator('main ul li')).toHaveText(skills);
      await expect(page.locator('img')).toHaveAttribute('alt', '');
      expect(await page.locator('img').evaluate(image => ({width:image.naturalWidth,height:image.naturalHeight}))).toEqual({width:240,height:320});
    }
    if (route === '/projects/') {
      for (const project of projects) await expect(page.getByRole('link', {name: project.title, exact:true})).toHaveAttribute('href',project.href);
      await expect(page.locator('main h2')).toHaveText(['Web Apps','Dot Files','Machine Learning']);
    }
    if (route === '/articles/first/') await expect(page.getByText('A small beginning is enough.', {exact:false})).toBeVisible();
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', {name:'haro.j.angel@gmail.com',exact:true})).toHaveAttribute('href','mailto:haro.j.angel@gmail.com');
    await expect(footer.getByRole('link', {name:'GitHub (aharoJ)',exact:true})).toHaveAttribute('href','https://github.com/aharoj');
    expect(await page.locator('a[target], form').count()).toBe(0);
    const links = await page.locator('a').evaluateAll(nodes => nodes.map(node=>node.getAttribute('href')));
    for (const href of links.filter(href=>href.startsWith('/') || href.startsWith('#'))) {
      const url = new URL(href, new URL(route, baseURL));
      expect((await context.request.get(url.href.split('#')[0])).status()).toBe(200);
      if (url.hash) expect(await page.locator(`[id="${url.hash.slice(1)}"]`).count()).toBe(1);
    }
    await page.keyboard.press('Tab'); await expect(page.getByRole('link',{name:'Skip to content'})).toBeFocused();
    expect(await page.locator(':focus').evaluate(node=>getComputedStyle(node).outlineStyle)).not.toBe('none');
    await page.keyboard.press('Enter'); await expect(page.locator('main')).toBeFocused();
    await page.screenshot({path:testInfo.outputPath('page.png'),fullPage:true});
    await testInfo.attach('image-bodies', {body:JSON.stringify({route,width,dpr,bytes,images:Object.fromEntries(bodies)},null,2),contentType:'application/json'});
    for (const destination of nav) {
      await page.goto(route); await page.locator(`nav a[href="${destination}"]`).click(); await expect(page).toHaveURL(destination);
    }
    await page.goto(route); await page.locator('header > a').click(); await expect(page).toHaveURL('/');
    await page.goto('/articles/'); await page.getByRole('link',{name:'Start with the reader'}).click(); await expect(page).toHaveURL('/articles/first/');
    await page.getByRole('link',{name:'Back to all articles'}).click(); await expect(page).toHaveURL('/articles/');
    await context.close();
  });
}
