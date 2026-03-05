import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // no need to import describe, it, expect
    environment: "jsdom", // simulate browser environment
    setupFiles: ["./vitest.setup.ts"], // runs before each test file
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"], // text for terminal, lcov for CI

      exclude: [
        "node_modules/",
        "dist/",
        "**/*.stories.tsx", // don't cover stories
        "**/*.config.ts",
        "vitest.setup.ts",
      ],
    },
  },
});
