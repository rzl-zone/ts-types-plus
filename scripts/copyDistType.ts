import fs from "fs";
import path from "path";
import chalk from "chalk";
import fg from "fast-glob";

export const copyDistType = async (pattern: string | string[]) => {
  try {
    // const distDir = path.resolve("dist");

    const patterns = Array.isArray(pattern) ? pattern : [pattern];
    const files: string[] = [];

    for (const p of patterns.sort()) {
      const matched = await fg(p, {});
      files.push(...matched);
    }

    console.log(
      chalk.bold(
        `🕧 ${chalk.cyanBright("Starting")} to ${chalk.underline.blueBright(
          "Copying DTS Files to TS Files"
        )} at ${chalk.italic.underline.whiteBright("'dist'")} folder.`
      )
    );

    for (const [idx, f] of files.entries()) {
      const src = path.relative(process.cwd(), f);
      const dest = path.relative(
        process.cwd(),
        f.replace(/\.d(?=\.(ts|mts|cts|esm)$)/, "")
      );

      const relSrc = src.replace(/\\/g, "/");
      const relDest = dest.replace(/\\/g, "/");

      fs.copyFileSync(src, dest);

      console.log(
        `${chalk.bold("   >")} ${chalk.italic(
          `${chalk.white(idx + 1 + ".")} ${chalk.white("Copying DTS")} ${chalk.yellow(
            "from"
          )} '${chalk.bold.underline.cyanBright(relSrc)}' ${chalk.bold.gray(
            "➔"
          )} '${chalk.bold.underline.cyanBright(relDest)}'.`
        )}`
      );
    }

    if (files.length > 0) {
      console.log(
        chalk.bold(
          `✅ ${chalk.greenBright("Success")} ${chalk.underline.blueBright(
            "Copying DTS"
          )} (${chalk.yellowBright(
            `${files.length} file${files.length > 1 ? "(s)" : ""}`
          )}) at ${chalk.italic.underline.whiteBright("'dist'")} folder.`
        )
      );
    } else {
      console.log(
        chalk.bold(
          `⚠️  ${chalk.yellowBright("Skipping")} ${chalk.underline.blueBright(
            "Copying DTS"
          )} ${chalk.white("because")} ${chalk.redBright(
            "nothing left"
          )} files at ${chalk.italic.underline.whiteBright(
            "'dist'"
          )} folder to ${chalk.dim.redBright("copy")}.`
        )
      );
    }
  } catch (e) {
    console.error(
      chalk.bold(
        `✅ ${chalk.redBright("Error")} to ${chalk.underline.blueBright(
          "Copying DTS"
        )} at ${chalk.cyan("dist")} folder, because: \n\n > ${chalk.inverse.red(e)}`
      )
    );
  }
};

await copyDistType(["dist/**/*.d.{ts,mts,cts,esm}"]);
