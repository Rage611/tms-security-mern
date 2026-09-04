import { test, expect } from '@playwright/test';

test.describe('Image & Asset Integrity', () => {
  test('homepage images and logos load successfully without broken links', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check navbar logo
    const logoImg = page.locator('.header .logo-img');
    await expect(logoImg).toBeVisible();

    await expect.poll(async () => {
      return await logoImg.evaluate((img) => img.complete && img.naturalWidth > 0);
    }).toBeTruthy();

    // Check operational network map image
    const mapImg = page.locator('.map-image');
    await mapImg.scrollIntoViewIfNeeded();
    await expect(mapImg).toBeVisible();

    const isMapLoaded = await mapImg.evaluate((img) => img.complete && img.naturalWidth > 0);
    expect(isMapLoaded).toBeTruthy();
  });

  test('regional landing pages load hero background images properly', async ({ page }) => {
    await page.goto('/security-services/gurgaon');

    const heroImg = page.locator('.lp-hero-bg__img, .lp-hero-bg img, img[alt*="Gurgaon"], img[alt*="Security"]').first();
    if (await heroImg.count() > 0) {
      await expect(heroImg).toBeVisible();
      await expect.poll(async () => {
        return await heroImg.evaluate((img) => img.complete && img.naturalWidth > 0);
      }, { timeout: 10000 }).toBeTruthy();
    }
  });
});
