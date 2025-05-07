import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await API.get("/account/history");
        setHistory(res.data.transactions || []);
      } catch (err) {
        console.error("Failed to fetch transaction history", err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-page">
      <h2>Transaction History</h2>
      {history.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>To/From</th>
            </tr>
          </thead>
          <tbody>
            {history.map((tx, i) => (
              <tr key={i}>
                <td>{new Date(tx.date).toLocaleString()}</td>
                <td>{tx.type}</td>
                <td>{tx.amount}</td>
                <td>{tx.currency}</td>
                <td>{tx.targetName || tx.targetId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button className="back-btn" onClick={() => navigate("/dashboard")}>
        ⬅ Go Back
      </button>
    </div>
  );
};

export default TransactionHistory;
