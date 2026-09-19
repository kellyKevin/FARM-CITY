/**
 * Localize remote product photos into public/images/products and repoint
 * the catalogue (src/data/mockData.ts) at the downloaded local files.
 *
 * Why this exists: the Claude Code web sandbox blocks outbound image hosts,
 * so photos can only be downloaded once `images.unsplash.com` (or whichever
 * host the catalogue references) is allow-listed in the environment's egress
 * policy. Run this then rebuild:
 *
 *   node scripts/localize-images.mjs
 *   npm run build
 *
 * It shells out to `curl`, which is already wired to the sandbox proxy + CA
 * bundle, so it works as soon as the host is permitted. Idempotent: already
 * downloaded files and already-local paths are skipped.
 */
import fs from "node:fs";
import { execSync } from "node:child_process";

const DATA_FILE = "src/data/mockData.ts";
const OUT_DIR = "public/images/products";

const src = fs.readFileSync(DATA_FILE, "utf8");
const urls = [
  ...new Set(
    [...src.matchAll(/image:\s*"(https?:\/\/[^"]+)"/g)].map((m) => m[1])
  ),
];

if (urls.length === 0) {
  console.log("No remote image URLs found — catalogue is already fully local.");
  process.exit(0);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const slugFor = (url, i) => {
  const photo = url.match(/photo-([a-z0-9]+)/i);
  if (photo) return `unsplash-${photo[1]}`;
  return `img-${String(i).padStart(3, "0")}`;
};

const map = {};
let downloaded = 0;
let failed = [];

urls.forEach((url, i) => {
  const file = `${OUT_DIR}/${slugFor(url, i)}.jpg`;
  map[url] = `/${file.replace(/^public\//, "")}`;

  if (fs.existsSync(file) && fs.statSync(file).size > 1024) return;

  try {
    execSync(`curl -sS -L --fail --max-time 60 -o "${file}" "${url}"`, {
      stdio: ["ignore", "ignore", "inherit"],
    });
    if (!fs.existsSync(file) || fs.statSync(file).size <= 1024) {
      throw new Error("empty or too small");
    }
    downloaded++;
    console.log(`  ✓ ${map[url]}`);
  } catch (err) {
    failed.push({ url, reason: err.message });
    if (fs.existsSync(file)) fs.rmSync(file);
    delete map[url];
  }
});

// Rewrite only the URLs that downloaded successfully.
let out = src;
for (const [url, local] of Object.entries(map)) {
  out = out.split(`"${url}"`).join(`"${local}"`);
}
fs.writeFileSync(DATA_FILE, out);

console.log(`\nLocalized ${downloaded} new image(s); ${Object.keys(map).length}/${urls.length} remote URLs now point to local files.`);
if (failed.length) {
  console.log(`\n${failed.length} URL(s) could NOT be downloaded (host likely still blocked):`);
  for (const f of failed) console.log(`  ✗ ${f.url}`);
  console.log("\nAllow-list the image host in the egress policy, then re-run this script.");
  process.exit(1);
}
