import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MUSIC_DIR = path.resolve(__dirname, "../dist/audio");
const OUT_FILE = path.resolve(MUSIC_DIR, "manifest.json");

// Which extensions to include
const exts = new Set([".mp3", ".ogg", ".wav", ".m4a", ".flac"]);

function niceName(file) {
  // Strip extension and replace dashes/underscores with spaces
  return path.basename(file, path.extname(file)).replace(/[-_]+/g, " ");
}

async function main() {
  const entries = await fs.readdir(MUSIC_DIR, { withFileTypes: true });
  const files = entries.filter(
    (e) => e.isFile() && exts.has(path.extname(e.name).toLowerCase())
  );

  const items = [];
  for (const f of files) {
    const full = path.join(MUSIC_DIR, f.name);
    const stat = await fs.stat(full);
    items.push({
      src: `/audio/${f.name}`, // url you’ll use in <audio>
      fileName: f.name,
      title: niceName(f.name),
      size: stat.size,
      createdAt: stat.ctime.toISOString(), // creation time (from your machine/CI at build)
      modifiedAt: stat.mtime.toISOString(),
    });
  }

  // Sort by creation time (oldest first); change as you like
  items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  await fs.writeFile(OUT_FILE, JSON.stringify(items, null, 2));
  console.log(`Wrote ${items.length} items to ${OUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
