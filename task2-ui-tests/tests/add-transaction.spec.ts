import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
//const envelopeName = 'QA-Envelope-' + Date.now();
test('user can add a transaction', async ({ page }) => {
  await login(page, 'vhgallardo10@gmail.com', 'yourTestPassword');

  // Navigate to Transactions page
  await page.goto('https://goodbudget.com/home');

  const addButton = page.locator('a.btn.addTransaction');
  await expect(addButton).toBeVisible();
  await addButton.click();

  // Wait for the modal to appear
  const modal = page.locator('.add-transaction.modal');
  await expect(modal).toBeVisible();

  // 🔁 Switch to Income tab
  const incomeTab = modal.locator('a[href="#income"]');
  await expect(incomeTab).toBeVisible();
  await incomeTab.click();

  // Wait for income form to be active
  const incomeForm = modal.locator('#income');
  await expect(incomeForm).toBeVisible();

  // Fill Date
 //await incomeForm.locator('#income-date').fill();

const nameCompany = 'Company-' + Math.floor(Math.random() * 1000);
await incomeForm.locator('#income-payer').fill(nameCompany)

  const incomeAmountInput = page.locator('input[name="income-amount"]');
await expect(incomeAmountInput).toBeVisible();
await incomeAmountInput.fill('30');

const accountDropdown = page.locator('select[name="account"]');

// Wait for dropdown to be visible
await expect(accountDropdown).toBeVisible();

// Get the first valid value (skip the empty placeholder)
const validOption = await accountDropdown.locator('option').nth(1); // index 1 = first real account
const value = await validOption.evaluate(el => (el as HTMLOptionElement).value);

// Select that value
await accountDropdown.selectOption(value);


const saveButton = page.locator('#addTransactionSave');
await expect(saveButton).toBeVisible();
await saveButton.click();



  // Optional: Wait for modal to close
  await expect(modal).toBeHidden({ timeout: 5000 });

  // Confirm the income entry is listed
 // const transactionList = page.locator('#transactions-list');
 await expect(page.locator('#transactions')).toContainText(nameCompany);
 //await expect(page.locator('#transactions-list')).toContainText('Salary');
});
