import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import API from "../../services/api";
import "./SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/user/signup", {
        username,
        password,
        firstName,
        lastName,
      });

      localStorage.setItem("token", res.data.token);
      alert(res.data.message);
      navigate("/dashboard");
    } catch {
      alert("Signup failed. Email may be taken or input invalid.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        <NavLink to="/signin">Already have an account?</NavLink>
      </form>
    </div>
  );
};

export default SignUp;
