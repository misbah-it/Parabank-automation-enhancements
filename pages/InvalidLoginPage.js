import { expect } from '@playwright/test';

export class InvalidLoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Log In' });

    // Simplified: check for any visible welcome message container
    this.welcomeText = page.locator('#leftPanel p.smallText');
  }

  async loginWithInvalidCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyUserIsNotLoggedIn() {
    await expect(this.welcomeText).not.toBeVisible();
  }
}
