import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test('user can log in', async ({ page }) => {
  await login(page, 'vhgallardo10@gmail.com', '    ');

  // Verify user is logged in
  //await expect(page.locator('[data-target="envelopes"]')).toBeVisible();
  //await expect(page.locator('h1')).toContainText('Add Transaction');

  //await page.waitForLoadState('networkidle');


  //await expect(page.locator('.addTransaction')).toBeVisible();



});
