const { test } = require('./base');
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../testData');

test('Valid login shows welcome message', { tag: ['@smoke', '@sanity'] }, async ({ page, homePage }) => {
  await homePage.goto();

  const loginPage = new LoginPage(page);
  await loginPage.login(testData.username, testData.password);
  await loginPage.verifyWelcomeMessage(testData.firstName, testData.lastName);
});
