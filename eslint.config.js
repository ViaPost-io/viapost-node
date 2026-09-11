import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/**", "coverage/**", "src/generated/**"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    files: ["test/**/*.mjs", "scripts/**/*.mjs", "examples/**/*.mjs"],
    languageOptions: {
      globals: {
        AbortController: "readonly",
        AbortSignal: "readonly",
        console: "readonly",
        fetch: "readonly",
        Headers: "readonly",
        process: "readonly",
        ReadableStream: "readonly",
        Response: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        structuredClone: "readonly",
        TextEncoder: "readonly",
        URL: "readonly"
      }
    }
  }
);
