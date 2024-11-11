import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Global settings for the environment (browser)
  {
    languageOptions: { globals: globals.browser },
  },

  // Base ESLint rules configuration
  pluginJs.configs.recommended,

  // Define rules for files in the `src` folder only
  {
    files: ["src/**/*.js"], // Target files in the 'src' folder
    rules: {
      "no-console": "warn", // Warn on console statements
      "no-unused-vars": "warn", // Warn on unused variables
      quotes: ["error", "double"], // Enforce double quotes for strings
    },
  },

  // You can also specify to ignore files in other directories
  {
    ignores: ["node_modules/**", "dist/**", "webpack.config.js"], // Ignore files in these directories
  },
];
