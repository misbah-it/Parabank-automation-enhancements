
const { expect } = require('@playwright/test');
class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.firstName = page.locator('#customer\\.firstName');
    this.lastName = page.locator('#customer\\.lastName');
    this.address = page.locator('#customer\\.address\\.street');
    this.city = page.locator('#customer\\.address\\.city');
    this.state = page.locator('#customer\\.address\\.state');
    this.zipCode = page.locator('#customer\\.address\\.zipCode');
    this.phone = page.locator('#customer\\.phoneNumber');
    this.ssn = page.locator('#customer\\.ssn');
    this.username = page.locator('#customer\\.username');
    this.password = page.locator('#customer\\.password');
    this.confirmPassword = page.locator('#repeatedPassword');
    this.registerButton = page.getByRole('button', { name: 'Register' });

    this.welcomeMessage = page.locator('#rightPanel h1');
    this.successMessage = page.locator('#rightPanel p');
  }
  async navigateToRegister() {
    await this.registerLink.click();
  }

  async fillRegistrationForm(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.address.fill(data.address);
    await this.city.fill(data.city);
    await this.state.fill(data.state);
    await this.zipCode.fill(data.zipCode);
    await this.phone.fill(data.phone);
    await this.ssn.fill(data.ssn);
    await this.username.fill(data.username);
    await this.password.fill(data.password);
    await this.confirmPassword.fill(data.password);
  }

  async submitForm() {
    await this.registerButton.click();
  }

  async verifyRegistrationSuccess(username) {
    await expect(this.welcomeMessage).toHaveText(`Welcome ${username}`);
    await expect(this.successMessage).toContainText(
      'Your account was created successfully'
    );
  }
}

module.exports = { RegistrationPage };
