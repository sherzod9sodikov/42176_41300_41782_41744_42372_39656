// src/pages/Dashboard/Balance.jsx
import React, { useEffect, useState } from "react";
import API from "../../services/api";
import "./Balance.css";

const Balance = () => {
  const [balances, setBalances] = useState({});

  const fetchBalances = async () => {
    try {
      const res = await API.get("/account/balance");
      setBalances(res.data.balances || {});
    } catch (err) {
      console.error("Failed to fetch balances", err);
    }
  };

  useEffect(() => {
    fetchBalances();
  }, []);

  return (
    <div className="balance-container">
      <h3>Your Wallet</h3>
      <table className="balance-table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(balances).map(([currency, amount]) => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Balance;
