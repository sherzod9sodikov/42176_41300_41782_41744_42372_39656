# 42176_41300_41782_41744_42372_39656


# Virtual Currency Exchange Platform

This project is a full-stack virtual currency exchange platform developed by a team of six students. Users can register, log in, exchange currencies, send money to others, and view their transaction history. The frontend uses real-time exchange rates via an external API, and both frontend and backend are fully tested.

---

## Team Members & Responsibilities

| Name              | ID    | Role                        |
| ----------------- | ----- | --------------------------- |
| Sherzod Sodiqov   | 42176 | Project Manager             |
| Murad Vahabli     | 41300 | Backend Testing             |
| Aitbek Amanidinov | 41782 | Database + Frontend Testing |
| Vahid Nuraddinov  | 41744 | Frontend Developer          |
| Magsud Hajiyev    | 42372 | Backend Developer           |
| Assif Gafur       | 39656 | Documentation               |

---

## How to Run the Project

### 1. Clone the Repository

```bash
git clone git@github.com:sherzod9sodikov/42176_41300_41782_41744_42372_39656.git
cd 42176_41300_41782_41744_42372_39656
```

---

### 2. Backend Setup

```bash
cd backend
npm install
touch .env
```

Add your environment variables to `.env`:

```env
PORT=8000
MONGO_URL=mongodb+srv://your_connection_string
JWT_SECRET=your_jwt_secret
```

Run the backend server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend:

```bash
npm run dev
```

---

## Project Structure

### Backend (Node.js + Express)

* `controllers/`: Contains business logic (e.g. user registration, transactions)
* `routes/`: Express routers for users, accounts, and transactions
* `models/`: Mongoose schemas for User, Account, Transaction
* `middlewares/`: Auth middleware using JWT
* `tests/`: Unit tests using **Jest** and **Supertest**

### API Overview

* `POST /user/signup`: Register new user
* `POST /user/signin`: Login and receive JWT token
* `GET /account/balance`: Get current balances
* `POST /account/transfer`: Send money to another user
* `POST /account/exchange`: Exchange currencies
* `GET /transaction/history`: View all user transactions
* `GET /transaction/history/:id`: View a specific transaction

---

### Frontend (React)

* `src/pages/`: Contains route pages like SignIn, Dashboard, SendMoney, ExchangePage
* `src/components/`: UI components like DashboardButtons, TransactionHistory
* `src/services/api.js`: Axios instance to handle backend communication
* Uses `react-router-dom` for navigation
* Uses `fetch()` to get real-time exchange rates from [exchangerate.host](https://exchangerate.host/)

---

## Testing

### Backend Testing (Jest + Supertest)

Located in `backend/tests/` folder. Covered:

* ✅ User registration
* ✅ User login
* ✅ Get balance
* ✅ Transfer money
* ✅ Exchange currency
* ✅ Transaction history

Run backend tests:

```bash
npm test
```

### Frontend Testing

#### Unit Testing with Jest + React Testing Library

Test file: `src/__tests__/App.test.jsx`

* ✅ Rendering of Sign In, Sign Up, Dashboard pages

Run frontend tests:

```bash
npm test
```

#### End-to-End Testing with Cypress

Test file: `cypress/e2e/flow.cy.js`

Tested user flows:

* ✅ Login
* ✅ Exchange currency
* ✅ Send money
* ✅ View transaction history

Run Cypress:

```bash
npx cypress open
```

---

## External Services

* 🌐 **Exchange Rates** – Uses [https://exchangerate.host](https://exchangerate.host/#/) for real-time rates.
* 🔐 **Authentication** – Secured using JWT tokens on all protected routes.

---

## Summary

This app demonstrates full-stack development with a focus on clean architecture, modular codebase, and comprehensive testing. The combination of backend unit tests and frontend UI tests ensures reliability and stability across the whole system.


