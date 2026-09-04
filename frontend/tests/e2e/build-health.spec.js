import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');

test.describe('Build Health & Pre-Render Pipeline Audit', () => {
  test('sitemap.xml contains all 24 URLs', async () => {
    const sitemapPath = path.join(ROOT_DIR, 'public/sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBeTruthy();

    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

    const expectedSlugs = [
      'https://tmssecurity.in/',
      'https://tmssecurity.in/company',
      'https://tmssecurity.in/leadership',
      'https://tmssecurity.in/compliance',
      'https://tmssecurity.in/security-guards',
      'https://tmssecurity.in/trained-gunman',
      'https://tmssecurity.in/pso',
      'https://tmssecurity.in/bouncer',
      'https://tmssecurity.in/facility-management',
      'https://tmssecurity.in/housekeeping',
      'https://tmssecurity.in/data-entry-operators',
      'https://tmssecurity.in/career',
      'https://tmssecurity.in/contact',
      'https://tmssecurity.in/security-services/delhi',
      'https://tmssecurity.in/security-services/noida',
      'https://tmssecurity.in/security-services/gurgaon',
      'https://tmssecurity.in/security-services/faridabad',
      'https://tmssecurity.in/security-services/hisar',
      'https://tmssecurity.in/security-services/rohtak',
      'https://tmssecurity.in/security-services/greater-noida',
      'https://tmssecurity.in/security-services/ghaziabad',
      'https://tmssecurity.in/security-services/lucknow',
      'https://tmssecurity.in/security-services/varanasi',
      'https://tmssecurity.in/security-services/patna',
    ];

    for (const url of expectedSlugs) {
      expect(sitemapContent).toContain(url);
    }
  });

  test('pre-render route list has all 24 defined routes', async () => {
    const prerenderScript = path.join(ROOT_DIR, 'scripts/prerender.mjs');
    expect(fs.existsSync(prerenderScript)).toBeTruthy();

    const scriptContent = fs.readFileSync(prerenderScript, 'utf8');
    const expectedRoutes = [
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
      '/compliance',
      '/security-services/delhi',
      '/security-services/noida',
      '/security-services/gurgaon',
      '/security-services/faridabad',
      '/security-services/hisar',
      '/security-services/rohtak',
      '/security-services/greater-noida',
      '/security-services/ghaziabad',
      '/security-services/lucknow',
      '/security-services/varanasi',
      '/security-services/patna',
    ];

    for (const r of expectedRoutes) {
      expect(scriptContent).toContain(`'${r}'`);
    }
  });
});
