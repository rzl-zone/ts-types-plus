import fs from "fs";
import path from "path";
import fg from "fast-glob";

import { BUILD_LOGGER } from "./utils/logger";

export const copyDistType = async (pattern: string | string[]) => {
  try {
    const patterns = Array.isArray(pattern) ? pattern : [pattern];
    const files: string[] = [];

    for (const p of patterns.sort()) {
      const matched = await fg(p, {});
      files.push(...matched);
    }

    BUILD_LOGGER.ON_STARTING({
      actionName: "Copying DTS Files to TS Files"
    });

    for (const [idx, f] of files.entries()) {
      const src = path.relative(process.cwd(), f);
      const dest = path.relative(
        process.cwd(),
        f.replace(/\.d(?=\.(ts|mts|cts|esm)$)/, "")
      );

      const relSrc = src.replace(/\\/g, "/");
      const relDest = dest.replace(/\\/g, "/");

      fs.copyFileSync(src, dest);

      BUILD_LOGGER.ON_PROCESS_COPY({
        actionName: "Copying DTS",
        count: idx + 1,
        copyFrom: relSrc,
        copyTo: relDest
      });
    }

    if (files.length > 0) {
      BUILD_LOGGER.ON_FINISH({
        actionName: "Copying DTS",
        count: files.length
      });
    } else {
      BUILD_LOGGER.ON_SKIPPING({
        actionName: "Copying DTS",
        reasonEndText: "copy"
      });
    }
  } catch (error) {
    BUILD_LOGGER.ON_ERROR({
      actionName: "Copying DTS",
      error
    });
  }
};

await copyDistType(["dist/**/*.d.{ts,mts,cts,esm}"]);
