import React from "react";

const CurrencyGraph = ({ baseCurrency, selectedCurrency }) => {
  return (
    <div className="currency-graph">
      <h3>
        Graph for {baseCurrency} to {selectedCurrency}
      </h3>
      {/* You can integrate Chart.js or Recharts here */}
      <div className="chart-placeholder">
        [Graph of last 7 days will appear here...]
      </div>
    </div>
  );
};

export default CurrencyGraph;
