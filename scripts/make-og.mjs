import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFile } from 'node:fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(__dirname, '../public/og-image.png');

// Pull a few values out of src/data/site.ts without requiring a TS toolchain.
const siteSrc = await readFile(path.resolve(__dirname, '../src/data/site.ts'), 'utf8');
function pick(field) {
  const m = siteSrc.match(new RegExp(`${field}:\\s*"([^"\\n]*)"`));
  return m ? m[1] : '';
}
const name = pick('name') || 'Jonah Gräfe';
const role = pick('role') || 'Data Science · Machine Learning · AI';
const url = (pick('url') || 'https://jonah-gr.github.io').replace(/^https?:\/\//, '');

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1220"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.6">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fill="#f8fafc">
    <text x="80" y="270" font-size="84" font-weight="700" letter-spacing="-2">${escape(name)}</text>
    <text x="80" y="340" font-size="36" font-weight="500" fill="#cbd5e1">${escape(role)}</text>
    <text x="80" y="540" font-size="26" font-weight="500" fill="#93c5fd">${escape(url)}</text>
  </g>
  <g transform="translate(980,140)">
    <rect width="140" height="140" rx="28" fill="#3b82f6"/>
    <text x="70" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif"
          font-size="64" font-weight="700" fill="#ffffff" letter-spacing="-2">JG</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
