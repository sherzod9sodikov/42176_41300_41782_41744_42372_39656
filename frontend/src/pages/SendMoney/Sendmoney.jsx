import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./Sendmoney.css";

const currencies = ["USD", "EUR", "UZS", "GBP", "INR"];

const SendMoney = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const res = await API.get(`/user/otherusers?filter=${search}`);
      setUsers(res.data.users);
    } catch (err) {
      console.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    getUsers();
  }, [search]);

  const openModal = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const transfer = async () => {
    if (!selectedUser || amount <= 0) return;
    try {
      const res = await API.post("/account/transfer", {
        to: selectedUser.userid,
        amount: Number(amount),
        currency,
      });
      if (res.status === 200) {
        setModalVisible(false);
        navigate("/dashboard");
      }
    } catch {
      alert("Transfer failed. Check funds.");
    }
  };

  return (
    <div className="send-container">
      <h2 className="title">Send Money</h2>
      <p className="subtitle">Search and select a user to send money to:</p>

      <input
        type="text"
        placeholder="Search users by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="user-list">
        {users.map((user) => (
          <div
            key={user.userid}
            className="user-card"
            onClick={() => openModal(user)}
          >
            <strong>
              {user.firstName} {user.lastName}
            </strong>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h3>Transfer to {selectedUser.firstName}</h3>

            <label>Currency:</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>

            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />

            <div className="modal-actions">
              <button className="confirm-btn" onClick={transfer}>
                Confirm
              </button>
              <button
                className="cancel-btn"
                onClick={() => setModalVisible(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <button className="back-btn" onClick={() => navigate("/dashboard")}>
        ⬅ Go Back
      </button>
    </div>
  );
};

export default SendMoney;
