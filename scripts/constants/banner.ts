import fs from "fs";
import path from "path";

const pkgJson = path.resolve("./package.json");
const pkg = JSON.parse(fs.readFileSync(pkgJson, "utf-8"));
const PKG_VERSION =
  typeof pkg?.version === "string" && pkg.version.trim().length
    ? `${pkg.version}`
    : "Unknown";
const PKG_HOMEPAGE =
  typeof pkg?.homepage === "string" && pkg.homepage.trim().length
    ? `${pkg.homepage.split("#")[0]}`
    : "https://github.com/rzl-zone";

export const topBanner = `/*!
 * ====================================================
 *  Rzl TS-Types-Plus.
 * ----------------------------------------------------
 *  Version: \`${PKG_VERSION}\`.
 *  Author: \`Rizalvin Dwiky\`.
 *  Repository: \`${PKG_HOMEPAGE}\`.
 * ====================================================
 */`;
