import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

const routes = [
  "/case-study",
  "/case-study/landslide-detection",
  "/case-study/3rd-step-verification",
];

const indexHtml = readFileSync(join(distDir, "index.html"), "utf-8");

for (const route of routes) {
  const dir = join(distDir, route.slice(1));
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(join(dir, "index.html"), indexHtml);
  console.log(`Created ${route}/index.html`);
}
