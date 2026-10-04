import { test } from './base.js';
import { AccountsOverviewPage } from '../pages/AccountsOverviewPage.js';
import testData from '../testData.js';

test('Check transaction of 33 in account overview', { tag: '@sanity' }, async ({ loggedInPage: page }) => {
  const accountsOverviewPage = new AccountsOverviewPage(page);
  await accountsOverviewPage.navigateToAccountsOverview();
  await accountsOverviewPage.openFirstAccount();

  await accountsOverviewPage.checkTransactionAmount(testData.transferAmount);
});
