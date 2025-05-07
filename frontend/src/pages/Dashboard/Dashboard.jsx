import React from "react";

import DashboardButtons from "./DashboardButtons";
import Balance from "./Balance";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h2>Virtual Currency Exchange</h2>
      <Balance />

      <DashboardButtons />
    </div>
  );
};

export default Dashboard;
