## Frontend Testing Guide

### 1. Unit Testing with Jest & React Testing Library

We use **Jest** combined with **React Testing Library** for unit tests of individual React components.

#### Test File

- `src/__tests__/App.test.jsx`

#### Covered Cases

- ✅ Renders **Sign In** page by default
- ✅ Navigates to **Sign Up** page
- ✅ Navigates to **Dashboard** page

#### Run Unit Tests

```bash
npm run test
```

If you want to keep running and watching test updates:

```bash
npm run test:watch
```

---

### 2. End-to-End Testing with Cypress

We use **Cypress** for testing full user flows in the browser.

#### Test File

- `cypress/e2e/exchange.cy.js`

#### Covered Test Cases

1. ✅ Login with correct credentials
2. ✅ Navigate to **Exchange** page and perform currency exchange
3. ✅ Navigate to **Send Money** page and complete a transfer
4. ✅ View **Transaction History**

#### How to Run Cypress

First, open Cypress UI:

```bash
npx cypress open
```

Then choose the browser and run any of the tests visually.

Or run all tests headlessly:

```bash
npx cypress run
```

---

### Setup Notes

- Cypress base URL must point to your frontend, e.g., `http://localhost:5173`
- Make sure your backend (`localhost:8000`) is running for API calls to work
- If using `.env`, define:

  ```env
  VITE_API_URL=http://localhost:8000/api/v1
  ```
