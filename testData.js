// Unique suffix so a fresh username/account is registered on every run.
// ParaBank's live demo server rejects registration for a username that
// already exists, so the registration test can't reuse a fixed username.
const uniqueSuffix = Date.now();

module.exports = {
  // Known, already-registered account used by every test that just needs
  // to log in (login, logout, openAccount, transferFunds, accountsOverview).
  username: 'misbaa',
  password: '1234',
  firstName: 'misbah',
  lastName: 'waseem',

  // Data for the registration test only — a fresh identity each run.
  registration: {
    username: `misbah_${uniqueSuffix}`,
    password: '1234',
    firstName: 'misbah',
    lastName: 'waseem',
    address: '224 c block millitary account',
    city: 'lahore',
    state: 'lahore',
    zipCode: '123',
    phone: '03020438520',
    ssn: '1122'
  },

  invalidLogin: {
    username: 'misbahh',
    password: 'wrongpassword'
  },

  transferAmount: '33',
  accountType: '1'
};
