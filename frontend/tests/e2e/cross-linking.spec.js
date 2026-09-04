import { test, expect } from '@playwright/test';

const SERVICE_PAGES = [
  '/security-guards',
  '/trained-gunman',
  '/pso',
  '/bouncer',
  '/facility-management',
  '/housekeeping',
  '/data-entry-operators',
];

const ALL_11_CITIES = [
  { slug: 'delhi', name: 'Delhi' },
  { slug: 'gurgaon', name: 'Gurgaon' },
  { slug: 'faridabad', name: 'Faridabad' },
  { slug: 'hisar', name: 'Hisar' },
  { slug: 'rohtak', name: 'Rohtak' },
  { slug: 'noida', name: 'Noida' },
  { slug: 'greater-noida', name: 'Greater Noida' },
  { slug: 'ghaziabad', name: 'Ghaziabad' },
  { slug: 'lucknow', name: 'Lucknow' },
  { slug: 'varanasi', name: 'Varanasi' },
  { slug: 'patna', name: 'Patna' },
];

test.describe('Two-Way Cross-Linking Matrix & Silo Verification', () => {
  // 1. Service Pages -> All 11 Location Pages
  for (const servicePath of SERVICE_PAGES) {
    test(`service page "${servicePath}" contains Operating Regions linking all 11 cities`, async ({ page }) => {
      await page.goto(servicePath);

      const operatingRegions = page.locator('.service-regions-section');
      await expect(operatingRegions).toBeAttached();

      for (const city of ALL_11_CITIES) {
        const cityLink = operatingRegions.locator(`a[href="/security-services/${city.slug}"]`);
        await expect(cityLink).toBeAttached();
      }
    });
  }

  // 2. Location Pages -> Core Service Pages & Compliance
  test('location pages link back to core services and /compliance', async ({ page }) => {
    await page.goto('/security-services/delhi');

    // PSARA trust badge must link to /compliance
    const psaraLink = page.locator('a[href="/compliance"]').first();
    await expect(psaraLink).toBeAttached();

    // Service cards must link to specific service pages
    const expectedServicePaths = [
      '/security-guards',
      '/pso',
      '/bouncer',
      '/trained-gunman',
      '/facility-management',
      '/housekeeping',
    ];

    for (const sPath of expectedServicePaths) {
      const sLink = page.locator(`a[href="${sPath}"]`).first();
      await expect(sLink).toBeAttached();
    }
  });

  // 3. The Company -> Compliance links
  test('The Company page links PSARA credentials to /compliance', async ({ page }) => {
    await page.goto('/company');

    const complianceLinks = page.locator('a[href="/compliance"]');
    const count = await complianceLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });
});
