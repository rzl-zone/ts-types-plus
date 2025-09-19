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
    format: ["cjs", "esm"],
    splitting: true,
    bundle: true,
    minify: "terser",
    treeshake: true,
    external: [],
    dts: true,
    clean: false,
    terserOptions: {
      format: {
        comments: false
      }
    },
    esbuildOptions(options) {
      options.legalComments = "none";
      options.ignoreAnnotations = true;

      options.plugins = [
        {
          name: "remove-types-runtime",
          setup(build) {
            build.onResolve({ filter: /\.(types|d)\.(ts|tsx)$/ }, (args) => {
              return { path: args.path, external: true };
            });

            build.onResolve({ filter: /^types\// }, (args) => {
              return { path: args.path, external: true };
            });

            build.onResolve({ filter: /src\/types\// }, (args) => {
              return { path: args.path, external: true };
            });
          }
        }
      ];
    },
    onSuccess: async () => {
      const removeJs = await fg(["dist/**/*.{js,js.map,cjs}", "dist/*.{js,js.map,cjs}"]);
      for (const file of removeJs) {
        fs.rmSync(file, { force: true });
      }
    }
  }
]);
