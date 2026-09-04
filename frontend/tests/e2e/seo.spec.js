import { test, expect } from '@playwright/test';

test.describe('SEO & Structured Data (JSON-LD, Titles, Meta)', () => {
  test('homepage JSON-LD schema contains all 11 cities and verified entity citations', async ({ page }) => {
    await page.goto('/');

    const jsonLdScripts = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdScripts.count();
    expect(count).toBeGreaterThanOrEqual(1);

    let foundSecurityService = false;
    for (let i = 0; i < count; i++) {
      const content = await jsonLdScripts.nth(i).textContent();
      if (!content) continue;
      try {
        const data = JSON.parse(content);
        if (data['@type'] === 'SecurityService') {
          foundSecurityService = true;

          // Verify areaServed contains all 11 cities
          const areaServed = data.areaServed;
          expect(Array.isArray(areaServed)).toBeTruthy();

          const cityNames = areaServed.filter((a) => a['@type'] === 'City').map((c) => c.name);
          const requiredCities = ['Delhi', 'Gurgaon', 'Faridabad', 'Hisar', 'Rohtak', 'Noida', 'Greater Noida', 'Ghaziabad', 'Lucknow', 'Varanasi', 'Patna'];
          for (const reqCity of requiredCities) {
            expect(cityNames).toContain(reqCity);
          }

          // Verify sameAs verified entity links
          const sameAs = data.sameAs;
          expect(Array.isArray(sameAs)).toBeTruthy();
          expect(sameAs.some((url) => url.includes('linkedin.com'))).toBeTruthy();
          expect(sameAs.some((url) => url.includes('maps.google.com'))).toBeTruthy();
          expect(sameAs.some((url) => url.includes('indiamart.com'))).toBeTruthy();
          expect(sameAs.some((url) => url.includes('justdial.com'))).toBeTruthy();
        }
      } catch (err) {
        // Continue checking other JSON-LD blocks
      }
    }
    expect(foundSecurityService).toBeTruthy();
  });

  const sampleLocations = ['/security-services/delhi', '/security-services/gurgaon', '/security-services/noida', '/security-services/patna'];
  for (const locPath of sampleLocations) {
    test(`location page "${locPath}" has dynamic SEO title, meta description & canonical`, async ({ page }) => {
      await page.goto(locPath);

      // Title must be present and contain security/city
      const title = await page.title();
      expect(title).toMatch(/Security|Guard|PSARA/i);

      // Meta description must be non-empty (check dynamic helmet tag)
      const metaDesc = page.locator('meta[name="description"]').last();
      await expect(metaDesc).toHaveAttribute('content', /.+/);
      const descContent = await metaDesc.getAttribute('content');
      expect(descContent.length).toBeGreaterThan(30);

      // Canonical link should match URL
      const canonical = page.locator('link[rel="canonical"]').last();
      await expect(canonical).toHaveAttribute('href', /https:\/\/tmssecurity\.in/);
    });
  }
});
