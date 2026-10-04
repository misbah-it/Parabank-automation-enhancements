import { test } from './base.js';
import { InvalidLoginPage } from '../pages/InvalidLoginPage.js';
import testData from '../testData.js';

test('Login with invalid credentials should not show welcome message', { tag: '@sanity' }, async ({ homePage, page }) => {
  await homePage.goto();

  const invalidLoginPage = new InvalidLoginPage(page);
  await invalidLoginPage.loginWithInvalidCredentials(testData.invalidLogin.username, testData.invalidLogin.password);
  await invalidLoginPage.verifyUserIsNotLoggedIn();
});
