import { cp, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "node_modules/@designcodeio/threeui/lib-dist/assets/landing-pages/complete-shelf-v2.html");
const target = resolve(root, "public/landing-pages/complete-shelf-v2.html");

await mkdir(dirname(target), { recursive: true });
await cp(source, target, { force: true });
console.log("Copied the registered ThreeUI Complete Shelf runtime asset.");
