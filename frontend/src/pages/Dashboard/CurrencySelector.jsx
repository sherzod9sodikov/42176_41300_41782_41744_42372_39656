import React from "react";

const CurrencySelector = ({ baseCurrency, setBaseCurrency }) => {
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
  return (
    <div className="currency-selector">
      <label htmlFor="base">Base Currency: </label>
      <select
        id="base"
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
      >
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
