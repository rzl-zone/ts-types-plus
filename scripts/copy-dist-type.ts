import fs from "fs";
import path from "path";
import fg from "fast-glob";

const distFolder = path.resolve("dist");

const files = await fg("**/*.d.ts", { cwd: distFolder, absolute: true });

for (const file of files) {
  const parsed = path.parse(file);
  const newName = path.join(parsed.dir, parsed.name.replace(/\.d$/, "") + ".ts");
  fs.copyFileSync(file, newName);
  console.log(`Copied: ${file} → ${newName}`);
}
