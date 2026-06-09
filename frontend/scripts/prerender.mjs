#!/usr/bin/env node
/**
 * TMS Security — Post-build pre-render script
 *
 * Generates static HTML for every route so Googlebot receives
 * fully-populated pages instead of an empty <div id="root"></div>.
 *
 * Usage:  node scripts/prerender.mjs          (standalone)
 *         npm run build                        (called automatically after vite build)
 *
 * Requirements: puppeteer (devDependency)
 */

import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/* ─── Config ────────────────────────────────────────────────────── */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = 45678;

/** Routes to pre-render (must match your React Router paths) */
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
];

/** Domains to block during capture (analytics, CAPTCHA, etc.) */
const BLOCKED_DOMAINS = [
  'challenges.cloudflare.com',
  'vercel.com',
  'va.vercel-scripts.com',
  'vitals.vercel-insights.com',
  'google-analytics.com',
  'googletagmanager.com',
];

/** MIME types for the local static server */
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

/* ─── Guards ────────────────────────────────────────────────────── */

if (!fs.existsSync(DIST_DIR)) {
  console.error('❌  dist/ not found. Run "vite build" first.');
  process.exit(1);
}

/* Keep the original SPA shell in memory so the fallback always
   returns the un-prerendered shell (avoids hydration mismatches
   when we overwrite index.html with the pre-rendered home page). */
const SPA_SHELL = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

/* ─── Static file server with SPA fallback ──────────────────────── */

function createServer() {
  return http.createServer((req, res) => {
    const pathname = new URL(req.url, `http://localhost:${PORT}`).pathname;
    const filePath  = path.join(DIST_DIR, pathname);

    // 1. Exact file match
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // 2. Directory → index.html inside it
    const idx = path.join(filePath, 'index.html');
    if (fs.existsSync(idx) && fs.statSync(idx).isFile()) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(idx).pipe(res);
      return;
    }

    // 3. SPA fallback — serve the ORIGINAL shell from memory
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(SPA_SHELL);
  });
}

/* ─── Puppeteer helper: render one route ────────────────────────── */

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Block third-party requests that slow down / break prerender
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

  // Wait for React to mount something inside #root
  await page.waitForSelector('#root > *', { timeout: 10_000 });

  // Give react-helmet-async a tick to flush <head> updates
  await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));

  const html = await page.content();
  await page.close();
  return html;
}

/* ─── Main ──────────────────────────────────────────────────────── */

async function prerender() {
  console.log('\n🚀  Pre-rendering TMS Security pages…\n');

  /* Launch browser ─────────────────────────────────────────────── */
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
    process.exit(0);          // exit 0 so the build doesn't fail
  }

  /* Start local server ─────────────────────────────────────────── */
  const server = createServer();
  await new Promise((resolve) => server.listen(PORT, resolve));

  let ok = 0;
  let fail = 0;

  /* Pre-render each route ──────────────────────────────────────── */
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

  /* Pre-render the 404 page ────────────────────────────────────── */
  try {
    const html = await renderRoute(browser, '/page-that-does-not-exist-404');
    fs.writeFileSync(path.join(DIST_DIR, '404.html'), html, 'utf-8');
    console.log('   ✅  404.html');
    ok++;
  } catch (err) {
    console.error(`   ❌  404.html  —  ${err.message}`);
    fail++;
  }

  /* Cleanup ────────────────────────────────────────────────────── */
  await browser.close();
  server.close();

  console.log(`\n✅  Done — ${ok} rendered, ${fail} failed.\n`);
  if (fail > 0) process.exit(1);
}

prerender().catch((err) => {
  console.error('Pre-render crashed:', err);
  process.exit(1);
});
