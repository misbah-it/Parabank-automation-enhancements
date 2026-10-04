// pages/LoginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.welcomeText = page.locator('#leftPanel p.smallText'); // welcome message
  }

  async goto() {
    await this.page.goto('index.htm');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyWelcomeMessage(firstName, lastName) {
    await expect(this.welcomeText).toBeVisible();
    await expect(this.welcomeText).toContainText(`Welcome ${firstName} ${lastName}`);
  }
}

module.exports = { LoginPage };
