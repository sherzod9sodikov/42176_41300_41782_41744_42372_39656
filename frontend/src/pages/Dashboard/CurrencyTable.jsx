import React from "react";

const CurrencyTable = ({ rates, baseCurrency, setSelectedCurrency }) => {
  const top10 = Object.entries(rates).slice(0, 10);
  return (
    <div className="currency-table">
      <h3>Rates for 1 {baseCurrency}</h3>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {top10.map(([currency, rate]) => (
            <tr key={currency} onClick={() => setSelectedCurrency(currency)}>
              <td>{currency}</td>
              <td>{rate.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
