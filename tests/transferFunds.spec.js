import { test } from './base.js';
import { TransferFundsPage } from '../pages/TransferFundsPage.js';
import testData from '../testData.js';

test('Transfer Funds', { tag: '@smoke' }, async ({ loggedInPage: page }) => {
  const transferFundsPage = new TransferFundsPage(page);
  await transferFundsPage.navigateToTransferFunds();
  await transferFundsPage.enterAmount(testData.transferAmount);
  await transferFundsPage.selectFromAccount();
  await transferFundsPage.selectToAccount();
  await transferFundsPage.submitTransfer();
  await transferFundsPage.verifySuccess();
});
