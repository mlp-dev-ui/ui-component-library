// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "dist",
    "node_modules",
    "storybook-static",
    "coverage",
    "*.config.js",
    "*.config.ts",
  ]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",

      // General

      "no-console": "warn", // warn on console statements, but allow them during development
      "no-debugger": "error", // never leave debugger statements in production code
      "prefer-const": "error", // use const over let where possible

      // React-specific rules
      "react-hooks/rules-of-hooks": "error", // enforce rules of hooks
      "react-hooks/exhaustive-deps": "warn", // warn on missing dependencies in useEffect and similar hooks
    },
  },

  // Storybook files - relaxed rules
  {
    files: ["**/*.stories.{ts,tsx}"],
    extends: [...storybook.configs["flat/recommended"]],
    rules: {
      // Allow console statements in stories for debugging purposes
      "no-console": "off", // allow console statements in stories for debugging purposes
      "@typescript-eslint/no-explicit-any": "off", // allow any in stories for flexibility
    },
  },
  ...storybook.configs["flat/recommended"],
]);
