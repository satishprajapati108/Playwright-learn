import { test, expect } from '@playwright/test';
import { JobFilter } from '../pages/job-filter';

test('Switch tabs', async ({page}) => {
    const JobFilterOBJ = new JobFilter(page);
    await page.goto('/jobs')
    JobFilterOBJ.switchTab('ScoringOn')
    await expect(page).toHaveURL('/jobs/');
    
});

test('already logged in, lands on dashboard', async ({ page }) => {
  await page.goto('/');
  await expect(page).not.toHaveURL(/login/);
});