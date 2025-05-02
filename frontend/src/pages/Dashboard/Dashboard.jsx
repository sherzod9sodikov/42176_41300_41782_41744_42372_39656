import React, { useState, useEffect } from "react";
import CurrencySelector from "./CurrencySelector";
import CurrencyTable from "./CurrencyTable";
import CurrencyGraph from "./CurrencyGraph";
import DashboardButtons from "./DashboardButtons";
import API from "../../services/api";
import "./Dashboard.css";

const Dashboard = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [rates, setRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await API.get(`/latest?base=${baseCurrency}`);
        setRates(res.data.rates);
      } catch (error) {
        console.error("Failed to fetch rates", error);
      }
    };
    fetchRates();
  }, [baseCurrency]);

  return (
    <div className="dashboard-page">
      <h2>Virtual Currency Exchange</h2>
      <CurrencySelector
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
      />
      <CurrencyTable
        rates={rates}
        baseCurrency={baseCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <CurrencyGraph
        baseCurrency={baseCurrency}
        selectedCurrency={selectedCurrency}
      />
      <DashboardButtons />
    </div>
  );
};

export default Dashboard;
