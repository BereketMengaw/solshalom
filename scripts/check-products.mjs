// Sanity check: unique ids, every listed photo exists, every category used.
import fs from "fs";
const src = fs.readFileSync(new URL("../src/products.js", import.meta.url), "utf8");
const mod = await import("data:text/javascript," + encodeURIComponent(src));
const ids = new Set(); let bad = 0;
for (const p of mod.products) {
  if (ids.has(p.id)) { console.log("duplicate id", p.id); bad++; }
  ids.add(p.id);
  if (!mod.getCategory(p.category)) { console.log("unknown category", p.id); bad++; }
  for (const img of p.images) if (!fs.existsSync(new URL("../public" + img, import.meta.url))) { console.log("missing", img); bad++; }
}
const used = new Set(mod.products.map((p) => p.category));
for (const c of mod.categories) if (!used.has(c.id)) { console.log("empty category", c.id); bad++; }
const files = fs.readdirSync(new URL("../public/products", import.meta.url));
const listed = new Set(mod.products.flatMap((p) => p.images.map((i) => i.split("/").pop())));
for (const f of files) if (!listed.has(f)) { console.log("unused photo", f); bad++; }
console.log(`${mod.products.length} products, ${mod.categories.length} categories, ${listed.size} photos, ${mod.products.filter(p=>!p.images.length).length} without photos, ${bad} problems`);
process.exit(bad ? 1 : 0);
