import { test, expect } from '../fixtures';

test('already logged in, lands on dashboard', async ({ page }) => {
  await page.goto('/');
  await expect(page).not.toHaveURL(/login/);
});