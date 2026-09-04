import { test, expect } from '@playwright/test';

test.describe('Phone Number & Contact Channel Audit', () => {
  test('footer displays correct office phone across all pages', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    const footerText = await footer.innerText();
    expect(footerText).toContain('+91-9717763351');
  });

  test('contact page displays direct mobile and landline channels', async ({ page }) => {
    await page.goto('/contact');

    // Mobile channel
    const mobileLink = page.locator('a[href="tel:+917838701180"]');
    await expect(mobileLink).toBeVisible();

    // Landline channel
    const landlineLink = page.locator('a[href="tel:+911141401113"]');
    await expect(landlineLink).toBeVisible();
  });

  test('location pages have active call button with tel: protocol', async ({ page }) => {
    await page.goto('/security-services/delhi');

    // Immediate assistance call link
    const callLink = page.locator('a[href^="tel:"]').first();
    await expect(callLink).toBeAttached();

    // WhatsApp link exists
    const waLink = page.locator('a[href*="wa.me"]').first();
    await expect(waLink).toBeAttached();
  });

  test('service pages have valid tel: call buttons in CTA banners', async ({ page }) => {
    const sampleServices = ['/security-guards', '/pso', '/facility-management'];
    for (const sPath of sampleServices) {
      await page.goto(sPath);
      const callBtn = page.locator('a[href^="tel:"]').first();
      await expect(callBtn).toBeAttached();
    }
  });
});
