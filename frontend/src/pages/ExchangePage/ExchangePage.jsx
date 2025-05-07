import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./ExchangePage.css";

const currencies = [
  "USD",
  "EUR",
  "GBP",
  "INR",
  "JPY",
  "UZS",
  "CAD",
  "AUD",
  "CHF",
  "CNY",
];

const API_KEY = "d36f5d8d74a53234bf0d0aa5dc69b94d";

const ExchangePage = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(null);

  const navigate = useNavigate();

  const convert = async () => {
    try {
      const res = await fetch(
        `https://api.exchangerate.host/convert?access_key=${API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
      );
      const data = await res.json();

      if (data?.error?.type === "rate_limit_reached") {
        alert("Rate limit reached. Try a smaller amount.");
        setConverted("N/A");
        return;
      }

      if (typeof data.result === "number") {
        setConverted(data.result.toFixed(4));
      } else {
        setConverted("N/A");
      }
    } catch (err) {
      console.error("Conversion error:", err);
      setConverted("Error");
    }
  };

  const handleExchange = async () => {
    try {
      const res = await API.post("/account/exchange", {
        fromCurrency,
        toCurrency,
        fromAmount: parseFloat(amount),
        toAmount: parseFloat(converted),
      });

      alert(res.data.message || "Exchange successful");
      navigate("/dashboard");
    } catch (err) {
      console.error("Exchange failed:", err.response?.data || err.message);
      alert("Exchange failed. Please try again.");
    }
  };

  useEffect(() => {
    convert();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="exchange-page">
      <h2>Currency Exchange</h2>

      <div className="exchange-form">
        <div className="input-group">
          <label>From Currency:</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((cur) => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>To Currency:</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((cur) => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0.01"
          />
        </div>

        <div className="exchange-result">
          <h3>Converted Amount:</h3>
          <div className="converted-value">
            {converted !== null ? `${converted} ${toCurrency}` : "..."}
          </div>
        </div>

        <div className="button-group">
          <button onClick={convert}>Convert</button>
          <button
            onClick={handleExchange}
            disabled={!converted || isNaN(converted)}
          >
            Exchange and Save
          </button>
          <button onClick={() => navigate("/dashboard")}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
