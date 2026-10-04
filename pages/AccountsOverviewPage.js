import { expect } from '@playwright/test';

export class AccountsOverviewPage {
  constructor(page) {
    this.page = page;
    this.accountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
    this.firstAccountLink = page.locator('#accountTable a').first();
    this.transactionRows = page.locator('#transactionTable tbody tr');
  }

  async navigateToAccountsOverview() {
    await this.accountsOverviewLink.click();
  }

  async openFirstAccount() {
    await this.firstAccountLink.click();
  }

  async checkTransactionAmount(amount) {
    await expect(this.transactionRows.first()).toBeVisible();

    const rowCount = await this.transactionRows.count();
    let found = false;

    for (let i = 0; i < rowCount; i++) {
      const rowText = await this.transactionRows.nth(i).innerText();

      if (rowText.includes(amount)) {
        found = true;
        break;
      }
    }

    expect(found).toBe(true);
  }
}
