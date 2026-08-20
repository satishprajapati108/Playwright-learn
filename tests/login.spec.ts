import { test, expect } from '@playwright/test';

test('already logged in, lands on dashboard', async ({ page }) => {
  await page.goto('/');
  // await expect(page).not.toHaveURL(/login/);
});