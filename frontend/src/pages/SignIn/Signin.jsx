import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import API from "../../services/api";
import "./SignIn.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/user/signin", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert(res.data.mssg);
      navigate("/dashboard");
    } catch {
      alert("Invalid login credentials.");
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={submit}>
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
        <button type="submit">Sign In</button>
        <NavLink to="/signup">Don’t have an account?</NavLink>
      </form>
    </div>
  );
};

export default SignIn;
