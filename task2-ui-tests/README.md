
# QA Challenge – Veronica Herrera

This repository contains the solution to the N26 Take-Home QA Challenge. It includes:

- Exploratory testing documentation (Task 1)
- Automated UI test suite using **Playwright** and **TypeScript** (Task 2)


---

## 🧰 Tech Stack

| Tool       | Purpose                              |
|------------|--------------------------------------|
| [Playwright](https://playwright.dev/) | E2E test automation framework |
| TypeScript | Strong typing and editor support     |
| GitHub Actions | CI pipeline (bonus)              |
| HTML Reporter | Test results output               |

---

## 🔧 Project Setup

Clone the repo and install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install --with-deps
```

---

## ▶️ How to Run Tests

Run the full suite:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/login.spec.ts
```

Run with UI (for debugging):

```bash
npx playwright test --headed --slow-mo=200
```

---

## 📊 View HTML Test Report

After tests run, open the HTML report:

```bash
npx playwright show-report
```

Or open manually:

```bash
open test-report/index.html  # macOS
```

Reports are stored in `/test-report`.

---

## 🧠 Approach

1. **Exploratory Testing** (Task 1)
   - Used charters based on functionality (login, transactions, envelopes)
   - Focused on UX edge cases, data validation, and accessibility

2. **Test Design** (Task 2)
   - Chose **three critical flows**:
     - User login
     - Add envelope
     - Add transaction (income)
   - Automated using Playwright for fast, reliable browser testing

3. **Automation Structure**
   - `tests/`: Spec files for each flow
   - `utils/`: Reusable functions for login
   - Dynamic test data (e.g. timestamp-based envelope names) ensures idempotency

4. **Resilience**
   - Used locators based on `id`, `name`, or robust class combinations
   - Added timeouts + visibility checks for flaky elements

---

## 🎯 Why This Stack?

- **Playwright** is modern, supports multiple browsers, rich selector engine, and native parallelism
- **TypeScript** provides strong typing, autocompletion, and refactor safety
- Easy CI/CD integration with GitHub Actions
- Bonus: Supports testing in Chromium, Firefox, and WebKit out of the box

---

## 🚀 GitHub Actions (CI)

Included in `.github/workflows/playwright.yml`:

- Runs tests on each push and PR
- Installs dependencies, runs tests
- Uploads the HTML test report as an artifact

---

## 👩🏻‍💻 Author

**Veronica Herrera**
QA Engineer | Manual + Automation | Passionate about delivering high-quality digital products
