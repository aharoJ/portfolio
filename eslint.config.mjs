// path: portfolio/eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // ⬇️ De-dupe against TypeScript diagnostics
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "no-undef": "off",            // TS handles undefined identifiers
      "no-unused-vars": "off",      // use @typescript-eslint/no-unused-vars instead (from next/typescript)
      "no-redeclare": "off",        // TS covers redeclarations
      "no-shadow": "off",           // prefer @typescript-eslint/no-shadow if you enable it
    },
  },
  {
    files: ["**/*.tsx"],
    rules: {
      "react/jsx-no-undef": "off",  // TS2552 covers undefined JSX names better
    },
  },
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     ...........       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ #

];

export default eslintConfig;
