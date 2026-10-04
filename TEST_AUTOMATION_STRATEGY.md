   # Test Automation Strategy

   This project uses Playwright with the Page Object Model to automate the ParaBank demo app. The goal is to keep the suite easy to read, reliable, and fast to run locally or in CI.

   ## Project structure

   - `tests/` — executable specs and shared test fixtures
   - `pages/` — page-object classes for each screen
   - `testData.js` — centralized credentials, defaults, and generated registration data
   - `playwright.config.js` — shared Playwright configuration
   - `.github/workflows/playwright.yml` — CI pipeline

   ## Key design choices

   ### 1. Centralized base URL
   The suite uses a single `baseURL` in `playwright.config.js`:

   ```js
   use: {
     baseURL: 'https://parabank.parasoft.com/parabank/'
   }
   ```

   This avoids repeating full URLs across page objects and tests. Tests can navigate with relative paths such as `page.goto('index.htm')` instead of hardcoded app URLs.

   ### 2. Centralized test data
   Sensitive values and reusable test inputs live in `testData.js` instead of being duplicated across specs.

   Examples:
   - known login credentials
   - invalid login values
   - transfer amount
   - registration payload

   The registration username is generated per run so the suite does not fail on repeated executions when ParaBank rejects duplicate usernames.

   ### 3. Shared login fixture
   The custom fixture in `tests/base.js` handles the repeated login flow:

   ```js
   loggedInPage: async ({ page, loginPage }, use) => {
     await loginPage.goto();
     await loginPage.login(testData.username, testData.password);
     await use(page);
   }
   ```

   This keeps the tests focused on the behavior being verified instead of repeating the same login boilerplate in every file.

   ### 4. Smoke and sanity tagging
   The suite uses Playwright tags to split targeted runs:

   - `@smoke` — critical user flows
   - `@sanity` — broader verification around core functionality

   Current examples:
   - Valid login shows welcome message -> `@smoke`, `@sanity`
   - Transfer Funds -> `@smoke`
   - Logout -> `@smoke`
   - Invalid login -> `@sanity`
   - Open New Account -> `@sanity`
   - Accounts overview verification -> `@sanity`
   - User registration -> untagged, because it is a setup-style flow and not part of the regular regression path

   ### 5. Single-worker execution for stability
   `playwright.config.js` runs with `workers: 1`.

   This is intentional for this project because the suite reuses the same ParaBank account and shared data across tests. Running multiple workers would introduce unnecessary state and ordering risk without adding value for this app.

   ## Local execution

   Install dependencies:

   ```bash
   npm install
   ```

   Run the full suite:

   ```bash
   npx playwright test
   ```

   Run only smoke tests:

   ```bash
   npm run test:smoke
   ```

   Run only sanity tests:

   ```bash
   npm run test:sanity
   ```

   Open the HTML report:

   ```bash
   npx playwright show-report
   ```

   ## CI/CD

   The GitHub Actions workflow in `.github/workflows/playwright.yml` does the following:

   1. checks out the repository
   2. installs Node.js and project dependencies
   3. installs the Chromium browser
   4. validates that the test files load correctly
   5. runs the Playwright suite
   6. uploads the HTML report and any failure artifacts

   This keeps the repo's local and CI behavior aligned and makes failed runs easier to inspect without re-running the suite manually.

   ## Why this approach works

   This suite is designed to balance readability and reliability:

   - page objects keep selectors out of specs
   - fixtures remove repeated setup logic
   - centralized data avoids hardcoded values scattered across files
   - smoke/sanity tags allow quick feedback without losing broader regression coverage
   - CI runs the same suite in a repeatable environment

   This is intentionally a practical, maintainable automation setup rather than a heavily documented historical log of every intermediate change.
