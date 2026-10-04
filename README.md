# Playwright Framework

This project creates a robust automated testing framework using Playwright with the Page Object Model (POM) and Fixtures.

## Project Structure

- **`tests/`:** Contains test specs plus `base.js`, the custom fixture file (`homePage`, `loginPage`, `loggedInPage`) that extends Playwright's default test runner.
- **`pages/`:** Contains Page Object classes, one per ParaBank page (Home, Login, Registration, Logout, Open Account, Transfer Funds, Accounts Overview).
- **`testData.js`:** Centralized test data shared across specs.
- **`playwright.config.js`:** Main configuration file for global settings (baseURL, browsers, reporters).

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run tests:**
   ```bash
   npx playwright test
   ```

3. **View Report:**
   ```bash
   npx playwright show-report
   ```

## Best Practices Implemented

- **Page Object Model (POM):** Separates test logic from page details.
- **Fixtures:** Injects page objects directly into tests, reducing boilerplate.
- **Base URL:** Centralized URL configuration for easy environment switching.

