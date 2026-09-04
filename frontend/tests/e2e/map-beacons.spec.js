import { test, expect } from '@playwright/test';

test.describe('Operational Network Radar Map & Beacons', () => {
  test('map section renders radar beacons and crawlable regional fallback links', async ({ page }) => {
    await page.goto('/');

    const networkSection = page.locator('.network-section');
    await expect(networkSection).toBeAttached();

    // Scroll into view to trigger intersection observer
    await networkSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);

    // Map container exists
    const mapContainer = page.locator('.map-container');
    await expect(mapContainer).toBeVisible();

    // Verify active beacons are visible
    const activeBeacons = page.locator('.beacon--active');
    const activeCount = await activeBeacons.count();
    expect(activeCount).toBeGreaterThanOrEqual(4);

    // Verify legend exists
    const legend = page.locator('.network__legend');
    await expect(legend).toBeVisible();
    await expect(page.locator('.legend__text:has-text("Active Deployment")')).toBeVisible();
    await expect(page.locator('.legend__text:has-text("Upcoming Expansion")')).toBeVisible();

    // Verify Crawler & User Regional Fallback Link Grid exists
    const crawlerFallback = page.locator('.network__crawler-fallback');
    await expect(crawlerFallback).toBeVisible();

    const expectedHubs = [
      { name: 'Delhi', href: '/security-services/delhi' },
      { name: 'Gurgaon', href: '/security-services/gurgaon' },
      { name: 'Faridabad', href: '/security-services/faridabad' },
      { name: 'Hisar', href: '/security-services/hisar' },
      { name: 'Rohtak', href: '/security-services/rohtak' },
      { name: 'Noida', href: '/security-services/noida' },
      { name: 'Greater Noida', href: '/security-services/greater-noida' },
      { name: 'Ghaziabad', href: '/security-services/ghaziabad' },
      { name: 'Lucknow', href: '/security-services/lucknow' },
      { name: 'Varanasi', href: '/security-services/varanasi' },
      { name: 'Patna', href: '/security-services/patna' },
    ];

    for (const hub of expectedHubs) {
      const hubLink = crawlerFallback.locator(`a[href="${hub.href}"]`);
      await expect(hubLink).toBeAttached();
      await expect(hubLink).toContainText(hub.name);
    }
  });
});
