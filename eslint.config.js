import js from "@eslint/js";
import tsEslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  tsEslint.configs.recommended,
  globalIgnores([
    "dist/**/*",
    "dist/**/*",
    "**/dist",
    "**/dev",
    "node_modules/**/*",
    "docs/**/*",
    "deprecated/**/*",
    "_deprecated/**/*"
  ]),
  {
    files: [
      "src/**/*.{ts,tsx}",
      "tests/**/*.{ts,tsx}",
      "scripts/**/*.{ts,tsx}",
      "*.config.{ts,js,*js}",
      "internal-global.d.ts"
    ]
  },
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: { tsconfigRootDir: import.meta.dirname }
    },

    //  files: ["src/**/*.{ts,tsx}", "scripts/**/*.{ts,tsx}", "*.js", "internal-global.d.ts"],
    rules: {
      semi: "warn",
      quotes: "warn",
      "comma-dangle": [
        "warn",
        {
          arrays: "never",
          objects: "never",
          imports: "never",
          exports: "never",
          functions: "never"
        }
      ],
      "no-useless-assignment": "warn",
      "prefer-const": "warn"
    }
  },
  {
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": "allow-with-description",
          "ts-check": "allow-with-description",
          minimumDescriptionLength: 3
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", argsIgnorePattern: "^_" }
      ]
    }
  }
]);
