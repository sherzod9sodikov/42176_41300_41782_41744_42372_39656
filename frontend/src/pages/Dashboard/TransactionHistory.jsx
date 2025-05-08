import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  const [history, setHistory] = useState([]);
  const [selectedTx, setSelectedTx] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const fetchHistory = async () => {
    try {
      const res = await API.get("/transaction/history");
      setHistory(res.data.transactions || []);
    } catch (err) {
      console.error("Failed to fetch transaction history", err);
    }
  };

  const openModal = async (id) => {
    try {
      const res = await API.get(`/transaction/history/${id}`);
      setSelectedTx(res.data.transaction);
      setModalVisible(true);
    } catch (err) {
      console.error("Failed to fetch transaction", err);
    }
  };

  useEffect(() => {
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
              <tr
                key={i}
                onClick={() => openModal(tx._id)}
                className="clickable-row"
              >
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

      {modalVisible && selectedTx && (
        <div className="modal">
          <div className="modal-content">
            <h3>Transaction Details</h3>
            <p>
              <strong>Type:</strong> {selectedTx.type}
            </p>
            <p>
              <strong>Amount:</strong> {selectedTx.amount} {selectedTx.currency}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(selectedTx.date).toLocaleString()}
            </p>
            <p>
              <strong>Sender:</strong> {selectedTx.senderName}
            </p>
            <p>
              <strong>Receiver:</strong> {selectedTx.targetName}
            </p>

            <button onClick={() => setModalVisible(false)}>Close</button>
          </div>
        </div>
      )}

      <button className="back-btn" onClick={() => navigate("/dashboard")}>
        ⬅ Go Back
      </button>
    </div>
  );
};

export default TransactionHistory;
