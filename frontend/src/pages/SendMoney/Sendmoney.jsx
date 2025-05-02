import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./SendMoney.css";

const SendMoney = () => {
  const [params] = useSearchParams();
  const [amount, setAmount] = useState(0);
  const name = params.get("name");
  const id = params.get("id");
  const navigate = useNavigate();

  const transfer = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/account/transfer", {
        to: id,
        amount: Number(amount),
      });
      if (res.status === 200) {
        navigate("/dashboard");
      }
    } catch {
      alert("Transfer failed or insufficient funds.");
    }
  };

  return (
    <div className="send-container">
      <h2>Send Money to {name}</h2>
      <label>Amount ($):</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={transfer}>Send</button>
      <button onClick={() => navigate("/dashboard")}>Go Back</button>
    </div>
  );
};

export default SendMoney;
