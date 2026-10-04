// pages/TransferFundsPage.js
import { expect } from '@playwright/test';

export class TransferFundsPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' });
    this.amountInput = page.locator('#amount');
    this.fromAccountSelect = page.locator('#fromAccountId');
    this.toAccountSelect = page.locator('#toAccountId');
    this.transferButton = page.getByRole('button', { name: 'Transfer' });
    this.successMessage = page.locator('text=Transfer Complete!');
  }

  async navigateToTransferFunds() {
    await this.transferFundsLink.click();
  }

  async enterAmount(amount) {
    await expect(this.amountInput).toBeVisible();
    await this.amountInput.fill(amount);
  }

  async selectFromAccount() {
    await expect(this.fromAccountSelect).toBeVisible();
    await expect(this.fromAccountSelect).toBeEnabled();

    const firstOptionValue = await this.fromAccountSelect.locator('option').first().getAttribute('value');
    if (!firstOptionValue) throw new Error('No options available in From Account dropdown');

    await this.fromAccountSelect.selectOption(firstOptionValue);
  }

  async selectToAccount() {
    await expect(this.toAccountSelect).toBeVisible();
    await expect(this.toAccountSelect).toBeEnabled();

    const firstOptionValue = await this.toAccountSelect.locator('option').first().getAttribute('value');
    if (!firstOptionValue) throw new Error('No options available in To Account dropdown');

    await this.toAccountSelect.selectOption(firstOptionValue);
  }

  async submitTransfer() {
    await expect(this.transferButton).toBeVisible();
    await expect(this.transferButton).toBeEnabled();
    await this.transferButton.scrollIntoViewIfNeeded();
    await this.transferButton.click();
  }

  async verifySuccess() {
    await expect(this.successMessage).toBeVisible();
  }
}
