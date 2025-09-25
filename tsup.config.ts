import fs from "fs";
import fg from "fast-glob";
import { defineConfig } from "tsup";

const entries = await fg(["src/index.ts"], {
  ignore: []
});

export default defineConfig([
  {
    entry: entries,
    outDir: "dist",
    format: ["esm"],
    splitting: false,
    bundle: false,
    minify: false,
    treeshake: true,
    external: [],
    dts: {
      only: true
    },
    clean: false,
    terserOptions: {
      format: {
        comments: false
      }
    },
    esbuildOptions(options) {
      options.legalComments = "none";
      options.ignoreAnnotations = true;
    }
  }
]);
