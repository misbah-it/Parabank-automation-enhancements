const { test } = require('@playwright/test');
const { RegistrationPage } = require('../pages/RegistrationPage');
const testData = require('../testData');

test('User Registration', async ({ page }) => {
  await page.goto('index.htm');
  const registration = new RegistrationPage(page);
  await registration.navigateToRegister();

  const data = testData.registration;

  await registration.fillRegistrationForm(data);
  await registration.submitForm();

  await registration.verifyRegistrationSuccess(data.username);
});
