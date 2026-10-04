import { expect } from '@playwright/test';

export class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logoutLink = page.getByRole('link', { name: 'Log Out' });
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
  }

  async clickLogout() {
    await expect(this.logoutLink).toBeVisible();
    await expect(this.logoutLink).toBeEnabled();
    await this.logoutLink.scrollIntoViewIfNeeded();
    await this.logoutLink.click();
  }

  async verifyLoggedOut() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }
}
