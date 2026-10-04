import { test } from './base.js';
import { LogoutPage } from '../pages/LogoutPage.js';

test('Logout test', { tag: '@smoke' }, async ({ loggedInPage: page }) => {
  const logoutPage = new LogoutPage(page);
  await logoutPage.clickLogout();
  await logoutPage.verifyLoggedOut();
});
