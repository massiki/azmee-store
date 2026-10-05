import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath) || !fs.existsSync(ssrEntry)) {
  console.error('[prerender] dist/index.html atau dist-ssr/entry-server.js tidak ditemukan.');
  process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf-8');
const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  console.error('[prerender] Placeholder <div id="root"></div> tidak ditemukan di index.html.');
  process.exit(1);
}

const html = template.replace(placeholder, `<div id="root">${appHtml}</div>`);
fs.writeFileSync(indexPath, html);

const textLength = appHtml.replace(/<[^>]+>/g, '').trim().length;
console.log(`[prerender] Berhasil — ${appHtml.length} bytes HTML disuntikkan ke dist/index.html (${textLength} bytes teks).`);
