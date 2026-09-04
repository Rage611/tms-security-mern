import { test, expect } from '@playwright/test';

test.describe('Forms & User Interactions', () => {
  test('Contact Page form has all required fields and handles input', async ({ page }) => {
    await page.goto('/contact');

    const form = page.locator('form');
    await expect(form).toBeVisible();

    // Inputs should exist
    const nameInput = form.locator('input[name="name"]');
    const emailInput = form.locator('input[name="email"]');
    const subjectInput = form.locator('input[name="subject"]');
    const serviceSelect = form.locator('select[name="service"]');
    const messageInput = form.locator('textarea[name="message"]');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(subjectInput).toBeVisible();
    await expect(serviceSelect).toBeVisible();
    await expect(messageInput).toBeVisible();

    // Fill sample values
    await nameInput.fill('Test Corporate Client');
    await emailInput.fill('test@company.com');
    await subjectInput.fill('Deployment Inquiry');
    await serviceSelect.selectOption('guarding');
    await messageInput.fill('Inquiry regarding corporate security personnel deployment.');

    expect(await nameInput.inputValue()).toBe('Test Corporate Client');
    expect(await emailInput.inputValue()).toBe('test@company.com');
    expect(await serviceSelect.inputValue()).toBe('guarding');

    // Submit button exists
    const submitBtn = form.locator('button[type="submit"]');
    await expect(submitBtn).toBeVisible();
  });

  test('Location Page lead generation form opens and accepts input', async ({ page }) => {
    await page.goto('/security-services/delhi');

    // Scroll to the proposal section
    const proposalSection = page.locator('.lp-proposal-section, .lp-form-card, form').first();
    await proposalSection.scrollIntoViewIfNeeded();

    // Form inputs should be present
    const inputs = page.locator('input[type="text"], input[type="email"], input[type="tel"]');
    const inputCount = await inputs.count();
    expect(inputCount).toBeGreaterThanOrEqual(2);

    // Verify submit button exists
    const submitButton = page.locator('button:has-text("Proposal"), button:has-text("Submit"), button[type="submit"]').first();
    await expect(submitButton).toBeVisible();
  });
});
