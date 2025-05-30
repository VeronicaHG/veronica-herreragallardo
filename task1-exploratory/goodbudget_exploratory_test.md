# Exploratory Testing Report – GoodBudget Web App
**Tester:** Veronica Herrera Gallardo 
**Date:** 2025-05-27  
**Browser:** Google Chrome  
**Duration:** 2 hours  

---

## 🔍 Testing Charters

| Charter ID | Description | Priority | Reason for Priority |
|------------|-------------|----------|---------------------|
| C1         | Sign-up and login process | High | Entry point of app – critical for any user to access features |
| C2         | Creating and editing envelopes | High | Core budgeting feature |
| C3         | Adding income and expenses | High | Fundamental functionality for budget tracking |
| C4         | Sync and data persistence (localStorage/cookies) | Medium | Impacts reliability of stored financial data |
| C5         | Input validation and error handling | Medium | Prevents user and system errors |
| C6         | Accessibility & keyboard navigation | Low | Important for inclusivity, less urgent than functional bugs |
| C7         | Responsive layout across screen sizes | Low | Affects usability but not core logic |
| C8         | API behavior and REST responses | Medium | Ensures backend communication integrity |

---

## 📝 Findings by Charter

### C1 – Sign-up and Login
- ✅ Sign-up works smoothly, email confirmation not required
- ❌ Password error messages not visible when field left blank
- ❌ No CAPTCHA or bot prevention

### C2 – Envelopes
- ✅ Envelopes can be created and edited
- ❌ No warning when deleting envelopes
- ❌ Envelopes with duplicate names allowed (may cause confusion)

### C3 – Income/Expenses
- ✅ Transactions save and display correctly
- ❌ No confirmation dialog for deleting a transaction
- ❌ Editing amount allows negative numbers without warning

### C4 – Data Persistence
- ✅ Data stored in localStorage correctly
- ❌ Session expires without warning — risk of data loss

### C5 – Validation
- ❌ No error shown for empty fields in transaction form
- ❌ Amount field accepts special characters like `#` and `@`

### C6 – Accessibility
- ❌ Inconsistent tab navigation order
- ❌ Low contrast on some buttons (Lighthouse score 68)

### C7 – Responsiveness
- ❌ Layout breaks slightly on very small screens (mobile portrait)
- ❌ Elements overlap on iPhone SE viewport in dev tools

### C8 – API Behavior
- ✅ All REST responses return correct status codes (200, 201, 400)
- ❌ Sensitive data sent over HTTP (not HTTPS) during testing

---

## 🧨 Risks to Mitigate

- **Data Integrity:** Lack of validation could lead to invalid or corrupted records.
- **Security:** No visible CAPTCHA, HTTPS not enforced, weak input sanitization.
- **Privacy:** Data stored in localStorage without encryption.
- **Accessibility Compliance:** Low contrast and poor keyboard support limit usability.
- **User Experience:** No warnings or confirmations on critical actions like delete.

---

## 🛠 Dev Tools Used

- **Network Tab:** Verified REST call structure and response codes  
- **Application Tab:** Checked localStorage keys and cookies  
- **Lighthouse:** Performance: 83, Accessibility: 68, SEO: 91  
- **aXe Extension:** Highlighted contrast issues, missing alt text

---

## ✅ Summary

The GoodBudget Web App performs well in basic functionality, but several medium- to high-risk issues were identified, particularly in validation, accessibility, and security. Addressing these would significantly improve the user experience and product robustness.

