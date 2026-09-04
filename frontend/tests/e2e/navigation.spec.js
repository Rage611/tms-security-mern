import { test, expect } from '@playwright/test';

test.describe('Navigation - Desktop', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('desktop navbar layout: proper height and all 6 items visible without wrap', async ({ page }) => {
    await page.goto('/');

    const header = page.locator('header.header');
    await expect(header).toBeVisible();

    const box = await header.boundingBox();
    expect(box.height).toBeLessThanOrEqual(125);

    // Verify all 6 top-level navigation items
    const navItems = page.locator('.header .nav__list > li');
    await expect(navItems).toHaveCount(6);

    const expectedLabels = ['HOME', 'ABOUT TMS', 'SERVICES', 'AREAS WE SERVE', 'CAREER', 'CONTACT US'];
    for (const label of expectedLabels) {
      await expect(page.locator(`.header .nav__list:has-text("${label}")`)).toBeVisible();
    }
  });

  test('desktop dropdown hover: Services and Areas We Serve open cleanly', async ({ page }) => {
    await page.goto('/');

    // Hover over SERVICES
    const servicesNav = page.locator('.nav-item.dropdown:has-text("SERVICES")').first();
    await servicesNav.hover();
    const servicesMenu = servicesNav.locator('.dropdown-menu').first();
    await expect(servicesMenu).toBeVisible();

    // Hover over AREAS WE SERVE
    const areasNav = page.locator('.nav-item.dropdown:has-text("AREAS WE SERVE")').first();
    await areasNav.hover();
    const megaMenu = areasNav.locator('.dropdown-mega');
    await expect(megaMenu).toBeVisible();

    // Verify mega menu contains all 4 states
    await expect(megaMenu.locator('.mega-state-title:has-text("DELHI (NCT)")')).toBeVisible();
    await expect(megaMenu.locator('.mega-state-title:has-text("HARYANA")')).toBeVisible();
    await expect(megaMenu.locator('.mega-state-title:has-text("UTTAR PRADESH")')).toBeVisible();
    await expect(megaMenu.locator('.mega-state-title:has-text("BIHAR")')).toBeVisible();

    // Verify city links inside mega menu
    const expectedCities = ['Delhi', 'Gurgaon', 'Faridabad', 'Hisar', 'Rohtak', 'Noida', 'Greater Noida', 'Ghaziabad', 'Lucknow', 'Varanasi', 'Patna'];
    for (const city of expectedCities) {
      await expect(megaMenu.locator(`a:has-text("${city}")`).first()).toBeVisible();
    }
  });

  test('smooth horizontal hover transition between Services and Areas We Serve', async ({ page }) => {
    await page.goto('/');

    const servicesNav = page.locator('.nav-item.dropdown:has-text("SERVICES")').first();
    const areasNav = page.locator('.nav-item.dropdown:has-text("AREAS WE SERVE")').first();

    // Hover Services
    await servicesNav.hover();
    await page.waitForTimeout(100);

    // Move to Areas We Serve horizontally
    await areasNav.hover();
    await page.waitForTimeout(100);

    const megaMenu = areasNav.locator('.dropdown-mega');
    await expect(megaMenu).toBeVisible();
  });
});

test.describe('Navigation - Mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile header layout: hamburger button visible and toggles menu', async ({ page }) => {
    await page.goto('/');

    const header = page.locator('header.header');
    await expect(header).toBeVisible();

    const box = await header.boundingBox();
    expect(box.height).toBeLessThanOrEqual(85);

    const hamburger = page.locator('.hamburger');
    await expect(hamburger).toBeVisible();

    // Menu initially closed (offscreen)
    const navList = page.locator('.nav__list');
    await expect(navList).not.toHaveClass(/active/);

    // Tap hamburger to open
    await hamburger.click();
    await expect(navList).toHaveClass(/active/);

    // Tap "AREAS WE SERVE" accordion in mobile menu
    const areasToggle = page.locator('.header .nav__link:has-text("AREAS WE SERVE")');
    await areasToggle.click();

    // Mega menu accordion should open on mobile
    const megaMenu = page.locator('.header .dropdown-mega');
    await expect(megaMenu).toHaveClass(/mobile-open/);

    // Click Delhi link inside accordion
    const delhiLink = megaMenu.locator('a:has-text("Delhi")').first();
    await expect(delhiLink).toBeVisible();
    await delhiLink.click();

    // Should navigate to /security-services/delhi and menu closes
    await expect(page).toHaveURL(/\/security-services\/delhi/);
    await expect(navList).not.toHaveClass(/active/);
  });
});
