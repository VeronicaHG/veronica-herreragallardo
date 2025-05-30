# 📦 Task 3 – REST API Test Automation

This folder contains automated API tests for the internal REST endpoints used by the [GoodBudget](https://goodbudget.com) web application.

While GoodBudget does not offer a public API, this test suite was built by identifying internal endpoints via browser dev tools and simulating user actions such as creating, retrieving, and deleting envelopes.

---

## 🛠 Tech Stack

- **TypeScript** – for type-safe scripting
- **Axios** – for making HTTP requests
- **Jest** – test runner and assertion library
- **ts-jest** – to allow Jest to execute TypeScript tests
- **jest-html-reporter** – to generate readable test reports

---

## 📁 Folder Structure

task3-api-tests/
├── envelope-api.test.ts # API test file
├── jest.config.js # Jest setup with HTML reporter
├── tsconfig.json # TypeScript config
├── api-test-report.html # Test report (generated after run)
├── package.json # Project metadata & dependencies
└── README.md # This file


---

## ⚙️ Setup

1. **Install dependencies**

```bash
npm install
```


2. Copy your session cookie

To authenticate with the GoodBudget app:

  * Log in to https://app.goodbudget.com

  * Open DevTools → Network tab → Filter by XHR

  * Interact with the app (e.g., edit envelopes)

  * Right-click one of the requests → Copy as cURL

  * From the copied output, extract the Cookie: header

  * Paste it into your test file like so:

```bash
const headers = {
  'Content-Type': 'application/json',
  'Cookie': '_goodbudget_session=abc123xyz456; other=value'
};
```

🚀 Running the Tests
CLI only:
```bash
npx jest
```
With HTML report:

```bash
npx jest --config jest.config.js
```

The report will be generated at: api-test-report.html

🧪 Tests Overview
These tests focus on the Envelopes domain:

Test	               Description
✅ Create Envelope	  Simulates a user creating an envelope
✅ Get Envelopes	    Verifies the list of envelopes
✅ Delete Envelope	  Deletes the previously created one

🧠 Approach
* Used browser DevTools to inspect XHR requests and find internal API endpoints

* Performed real user actions (create, fetch, delete) using REST requests

* Built clean, modular TypeScript tests using Jest

* Included assertions and logging for clarity

📈 Reporting
* The suite uses jest-html-reporter to generate a test execution summary.

* Open api-test-report.html in your browser after test execution.

📌 Notes
* The internal API is subject to change at any time.

* Envelope deletion may behave differently depending on how the app handles new or temporary envelopes.

* Tests will fail if session cookies expire or if rate limits are hit.

## 👩🏻‍💻 Author

**Veronica Herrera**
QA Engineer | Manual + Automation | Passionate about delivering high-quality digital products
