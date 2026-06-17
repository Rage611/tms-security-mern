#!/usr/bin/env node

import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = 45678;

const ROUTES = [
  '/',
  '/company',
  '/leadership',
  '/facility-management',
  '/housekeeping',
  '/career',
  '/contact',
  '/bouncer',
  '/pso',
  '/trained-gunman',
  '/security-guards',
  '/data-entry-operators',
  '/security-services/delhi',
  '/security-services/noida',
  '/security-services/gurgaon',
  '/security-services/faridabad',
  '/security-services/greater-noida',
  '/security-services/ghaziabad',
];

const BLOCKED_DOMAINS = [
  'challenges.cloudflare.com',
  'vercel.com',
  'va.vercel-scripts.com',
  'vitals.vercel-insights.com',
  'google-analytics.com',
  'googletagmanager.com',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.xml':  'application/xml',
  '.txt':  'text/plain',
};

if (!fs.existsSync(DIST_DIR)) {
  console.error('❌  dist/ not found. Run "vite build" first.');
  process.exit(1);
}

const SPA_SHELL = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

function createServer() {
  return http.createServer((req, res) => {
    const pathname = new URL(req.url, `http://localhost:${PORT}`).pathname;
    const filePath  = path.join(DIST_DIR, pathname);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    const idx = path.join(filePath, 'index.html');
    if (fs.existsSync(idx) && fs.statSync(idx).isFile()) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(idx).pipe(res);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(SPA_SHELL);
  });
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (BLOCKED_DOMAINS.some((d) => req.url().includes(d))) {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.goto(`http://localhost:${PORT}${route}`, {
    waitUntil: 'networkidle0',
    timeout: 30_000,
  });

  await page.waitForSelector('#root > *', { timeout: 10_000 });

  await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));

  const html = await page.content();
  await page.close();
  return html;
}

async function prerender() {
  console.log('\n🚀  Pre-rendering TMS Security pages…\n');

    let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
  } catch (err) {
    console.warn('⚠️   Puppeteer could not launch — pre-rendering SKIPPED.');
    console.warn('    Build locally with Chrome available, then deploy with:');
    console.warn('    vercel deploy --prebuilt\n');
    console.warn(`    Error: ${err.message}\n`);
    process.exit(0);          
  }

    const server = createServer();
  await new Promise((resolve) => server.listen(PORT, resolve));

  let ok = 0;
  let fail = 0;

    for (const route of ROUTES) {
    try {
      const html = await renderRoute(browser, route);

      if (route === '/') {
        fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html, 'utf-8');
      } else {
        const dir = path.join(DIST_DIR, route.slice(1));
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
      }
      console.log(`   ✅  ${route}`);
      ok++;
    } catch (err) {
      console.error(`   ❌  ${route}  —  ${err.message}`);
      fail++;
    }
  }

    await browser.close();
  server.close();

  console.log(`\n✅  Done — ${ok} rendered, ${fail} failed.\n`);
}

prerender().catch((err) => {
  console.error('Pre-render crashed:', err);
  process.exit(1);
});
