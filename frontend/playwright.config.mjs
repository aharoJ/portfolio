import { defineConfig } from '@playwright/test';

const port = process.env.PORTFOLIO_TEST_PORT ?? '4173';

export default defineConfig({
  testDir: './tests',
  use: {
    browserName: 'chromium',
    baseURL: `http://127.0.0.1:${port}`,
    javaScriptEnabled: false,
  },
  webServer: {
    command: `npm run preview -- --host 127.0.0.1 --port ${port} --ignore-lock`,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: false,
  },
});
