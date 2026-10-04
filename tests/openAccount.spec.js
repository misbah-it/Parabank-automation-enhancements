import { test } from './base.js';
import { OpenAccountPage } from '../pages/OpenAccountPage.js';
import testData from '../testData.js';

test('Open New Account', { tag: '@sanity' }, async ({ loggedInPage: page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.navigateToOpenAccount();
  await openAccountPage.selectAccountType(testData.accountType);
  await openAccountPage.selectFromAccount();
  await openAccountPage.submitAccount();
  await openAccountPage.captureAccountNumber();
});
