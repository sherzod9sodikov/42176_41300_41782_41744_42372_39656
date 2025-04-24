import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-buttons">
      <button onClick={() => navigate("/exchange")}>💱 Exchange Money</button>
      <button onClick={() => navigate("/send")}>💸 Send Money</button>
    </div>
  );
};

export default DashboardButtons;
