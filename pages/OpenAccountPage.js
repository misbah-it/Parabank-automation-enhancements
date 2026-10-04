import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;

    this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' });
    this.accountTypeSelect = page.locator('#type');          
    this.fromAccountSelect = page.locator('#fromAccountId'); 
    this.submitButton = page.locator('//*[@id="openAccountForm"]/form/div/input');
    this.accountNumberText = page.locator('#newAccountId'); 
  }

  async navigateToOpenAccount() {
    await this.openNewAccountLink.click();
  }

  async selectAccountType(typeValue) {
    await expect(this.accountTypeSelect).toBeVisible();
    await expect(this.accountTypeSelect).toBeEnabled();
    await this.accountTypeSelect.selectOption(typeValue);
  }

  async selectFromAccount() {
    await expect(this.fromAccountSelect).toBeVisible();
    await expect(this.fromAccountSelect).toBeEnabled();

    const firstOptionValue = await this.fromAccountSelect.locator('option').first().getAttribute('value');
    if (!firstOptionValue) throw new Error('No options available in From Account dropdown');

    await this.fromAccountSelect.selectOption(firstOptionValue);
  }

  async submitAccount() {
    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton).toBeEnabled();
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }

  async captureAccountNumber() {
    await expect(this.accountNumberText).toBeVisible();

    const accountNumber = await this.accountNumberText.innerText();
    if (!accountNumber || accountNumber.trim() === '') {
      throw new Error('Account number was not generated!');
    }

    return accountNumber;
  }
}
