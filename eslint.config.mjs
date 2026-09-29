import js from '@eslint/js';

export default [
  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/dist/**', '**/coverage/**'],
  },
  js.configs.recommended,
];
