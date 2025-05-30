//utils/login.ts


import { test, expect, Page } from '@playwright/test';

export async function login(page: Page, email: string, password: string){
  // Step 1: Go to login page
  await page.goto('https://goodbudget.com/login');

  // Step 2: Fill login form
  await page.fill('#username', email); //  test email
  await page.fill('#password', password); // test password

   // Step 3: Submit form
  await page.click('button[type="submit"]');

  // Step 4: Wait for redirect to app.goodbudget.com/home
  await expect(page).toHaveURL(/goodbudget\.com/);//  Home browser after login


}
