// Render every ```mermaid block in docs/ to a static SVG and produce a
// transformed copy (docs_build/) where each block is replaced with an image.
// Runs in the mermaid-cli container (Node + mmdc + Chromium available).
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DOCS = 'docs';
const OUT = 'docs_build';
const DIAGRAMS = path.join(OUT, 'assets', 'diagrams');

function getPuppeteerArgs() {
  if (process.env.PUPPETEER_CONFIG_FILE) {
    return ['-p', process.env.PUPPETEER_CONFIG_FILE];
  }
  // mermaid-cli Docker image ships its puppeteer config at this path (points at
  // the bundled chromium), but only its default entrypoint passes it. Re-add it
  // when we invoke mmdc ourselves.
  if (fs.existsSync('/puppeteer-config.json')) {
    return ['-p', '/puppeteer-config.json'];
  }
  return [];
}

const pptrArg = getPuppeteerArgs();

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(DIAGRAMS, { recursive: true });

// Copy non-Markdown assets (CSS, images, etc.) from docs/ into the build dir.
function copyAssets(srcDir, destDir) {
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyAssets(src, dest);
    } else if (!entry.name.endsWith('.md')) {
      fs.mkdirSync(destDir, { recursive: true });
      fs.copyFileSync(src, dest);
    }
  }
}
copyAssets(DOCS, OUT);

const files = fs.readdirSync(DOCS).filter((f) => f.endsWith('.md')).sort();
const re = /```mermaid\s*\r?\n([\s\S]*?)```/g;

let count = 0;
for (const f of files) {
  const text = fs.readFileSync(path.join(DOCS, f), 'utf8');
  let out = text;
  let m;
  let idx = 0;
  // reset regex per file (re is module-level with /g; use a fresh one)
  const r = new RegExp(re.source, 'g');
  while ((m = r.exec(text)) !== null) {
    idx++;
    count++;
    const mmd = m[1].trim();
    const base = `${f.replace(/\.md$/, '')}-${idx}`;
    const mmdFile = path.join(DIAGRAMS, `${base}.mmd`);
    const svgFile = path.join(DIAGRAMS, `${base}.svg`);
    fs.writeFileSync(mmdFile, mmd);
    const cmd = [
      'mmdc',
      '-i', JSON.stringify(mmdFile),
      '-o', JSON.stringify(svgFile),
      '-c', 'diagram-theme.json',
      '-b', 'white',
      ...pptrArg,
    ].join(' ');
    try {
      execSync(cmd, { stdio: 'inherit' });
    } catch (e) {
      console.error(`\nFailed to render diagram in ${f} (block ${idx}):`);
      console.error(mmd.slice(0, 500));
      process.exit(1);
    }
    fs.rmSync(mmdFile);
    out = out.replace(m[0], `![Diagram](assets/diagrams/${base}.svg)`);
  }
  // copy any sibling assets referenced by this file (none currently, but keep safe)
  fs.writeFileSync(path.join(OUT, f), out);
}

console.log(`Rendered ${count} diagrams into ${OUT}/assets/diagrams/`);
