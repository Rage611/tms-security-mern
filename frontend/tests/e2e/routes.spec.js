import { test, expect } from '@playwright/test';

const ALL_ROUTES = [
  { path: '/', expectedKeyword: 'TMS Security' },
  { path: '/company', expectedKeyword: 'Company' },
  { path: '/leadership', expectedKeyword: 'Leadership' },
  { path: '/compliance', expectedKeyword: 'Compliance' },
  { path: '/security-guards', expectedKeyword: 'Security Guard' },
  { path: '/trained-gunman', expectedKeyword: 'Gunman' },
  { path: '/pso', expectedKeyword: 'PSO' },
  { path: '/bouncer', expectedKeyword: 'Bouncer' },
  { path: '/facility-management', expectedKeyword: 'Facility' },
  { path: '/housekeeping', expectedKeyword: 'Housekeeping' },
  { path: '/data-entry-operators', expectedKeyword: 'Data Entry' },
  { path: '/career', expectedKeyword: 'Career' },
  { path: '/contact', expectedKeyword: 'Contact' },
  { path: '/security-services/delhi', expectedKeyword: 'Delhi' },
  { path: '/security-services/noida', expectedKeyword: 'Noida' },
  { path: '/security-services/gurgaon', expectedKeyword: 'Gurgaon' },
  { path: '/security-services/faridabad', expectedKeyword: 'Faridabad' },
  { path: '/security-services/hisar', expectedKeyword: 'Hisar' },
  { path: '/security-services/rohtak', expectedKeyword: 'Rohtak' },
  { path: '/security-services/greater-noida', expectedKeyword: 'Greater Noida' },
  { path: '/security-services/ghaziabad', expectedKeyword: 'Ghaziabad' },
  { path: '/security-services/lucknow', expectedKeyword: 'Lucknow' },
  { path: '/security-services/varanasi', expectedKeyword: 'Varanasi' },
  { path: '/security-services/patna', expectedKeyword: 'Patna' },
];

test.describe('Route & Link Integrity (24 Routes)', () => {
  for (const route of ALL_ROUTES) {
    test(`loads route "${route.path}" successfully with header & footer`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response.status()).toBeLessThan(400);

      // Verify Header exists
      const header = page.locator('header.header');
      await expect(header).toBeVisible();

      // Verify Footer exists
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();

      // Verify page title exists and is not empty
      const title = await page.title();
      expect(title.length).toBeGreaterThan(3);

      // Verify main content loaded with expected keyword
      const main = page.locator('main').first();
      await expect.poll(async () => {
        const text = await main.innerText();
        return text.toLowerCase();
      }, { timeout: 10000 }).toContain(route.expectedKeyword.toLowerCase());
    });
  }

  test('unknown route shows 404 page', async ({ page }) => {
    await page.goto('/some-nonexistent-page-12345');
    const main = page.locator('main').first();
    await expect.poll(async () => {
      const text = await main.innerText();
      return text;
    }, { timeout: 10000 }).toMatch(/404/);
  });
});
