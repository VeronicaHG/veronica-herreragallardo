import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test('user can add a new envelope', async ({ page }) => {
  // Step 1: Log in
  await login(page, 'vhgallardo10@gmail.com', 'yourTestPassword'); // Use a real password

  // Step 2: Navigate to Envelopes page
  await page.goto('https://goodbudget.com/envelope/edit');

  //Wait until at least 1 envelope row is loaded
  await page.waitForSelector('input.name', { timeout: 10000 });

  const rowsBefore = await page.locator('envelope-row').count();

  const addButton = page.locator('envelope-list .btn.btn-add');
  await expect(addButton).toBeVisible({ timeout: 5000 });
  await addButton.click({ force: true });

  await page.waitForTimeout(1000);

  await expect(page.locator('envelope-row')).toHaveCount(rowsBefore + 1, { timeout: 5000 });

  // Select the last envelope-row (the new one)
  const newRow = page.locator('envelope-row').nth(rowsBefore);

  const nameInput = newRow.locator('input.name');
  const amountInput = newRow.locator('input.amount');

const envelopeName = 'QA-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
  await expect(nameInput).toBeVisible();
  await nameInput.click();
  await nameInput.type(envelopeName, { delay: 100 });
  await nameInput.press('Tab');

  await expect(amountInput).toBeVisible();
  await amountInput.click();
  await amountInput.type('300', { delay: 100 });

  await amountInput.press('Tab');
  //Click outside to ensure change is registered
  await page.mouse.click(0, 0);

  await page.click('#save-envelopes-btn');

  await expect(page.locator('strong.name', { hasText: envelopeName })).toBeVisible({ timeout: 5000 });

  console.log('Envelope added successfully');
});
