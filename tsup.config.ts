// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // main entry point
  format: ["cjs", "esm"], // output both CommonJS and ES Module
  dts: true, // generate TypeScript type files
  sourcemap: true, // for debugging
  clean: true, // clear dist/ before each build
  external: ["react", "react-dom"], // don't bundle React, consumers have it
});
