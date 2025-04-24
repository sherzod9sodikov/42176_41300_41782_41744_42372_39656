import React from "react";
import "./UserCard.css";
import { useNavigate } from "react-router-dom";

const UserCard = ({ firstname, lastname, objectid }) => {
  const navigate = useNavigate();

  const getInitial = (name) => {
    return name?.[0]?.toUpperCase() || "?";
  };

  const handleSend = () => {
    navigate(`/send?id=${objectid}&name=${firstname}`);
  };

  return (
    <div className="user-card">
      <div className="user-card__initial">{getInitial(firstname)}</div>
      <div className="user-card__name">
        {firstname} {lastname}
      </div>
      <button className="user-card__button" onClick={handleSend}>
        Send Money
      </button>
    </div>
  );
};

export default UserCard;
