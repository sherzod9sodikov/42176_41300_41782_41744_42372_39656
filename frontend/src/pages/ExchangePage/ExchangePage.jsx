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

const REACT_APP_CURRENCY_API_KEY = "d36f5d8d74a53234bf0d0aa5dc69b94d";

const ExchangePage = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(null);

  const navigate = useNavigate();

  const convert = async () => {
    try {
      const API_KEY = REACT_APP_CURRENCY_API_KEY;
      const res = await fetch(
        `https://api.exchangerate.host/convert?access_key=${API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
      );
      const data = await res.json();
      console.log("Convert response:", data);

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

  useEffect(() => {
    convert();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="exchange-page">
      <h2>Currency Exchange</h2>

      <div className="exchange-form">
        <div className="input-group">
          <label>From:</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>To:</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
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
      </div>

      <div className="exchange-result">
        <h3>Converted Amount:</h3>
        <div className="converted-value">
          {converted !== null ? `${converted} ${toCurrency}` : "..."}
        </div>
      </div>

      <button onClick={() => navigate("/dashboard")}>Go Back</button>
    </div>
  );
};

export default ExchangePage;
