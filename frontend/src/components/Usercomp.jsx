import React from "react";
import "./Usercomp.css";
import { useNavigate } from "react-router-dom";

const Usercomp = ({ firstname, objectid, lastname }) => {
  const navigate = useNavigate();

  const getInitial = (name) => {
    return name?.[0]?.toUpperCase() || "?";
  };

  return (
    <div className="usercomp">
      <div className="initial">{getInitial(firstname)}</div>
      <div className="name">
        {firstname} {lastname}
      </div>
      <div className="sendmoney">
        <button
          onClick={() => {
            navigate(`/send?id=${objectid}&name=${firstname}`);
          }}
        >
          Send money
        </button>
      </div>
    </div>
  );
};

export default Usercomp;
