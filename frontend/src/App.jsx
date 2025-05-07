import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import SendMoney from "./pages/SendMoney/Sendmoney";
import TransactionHistory from "./pages/Dashboard/TransactionHistory";
import ExchangePage from "./pages/ExchangePage/ExchangePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/history" element={<TransactionHistory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
