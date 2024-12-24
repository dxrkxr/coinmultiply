import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@mail.com" && password === "123456") {
      navigate("/CoinList");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h2>Login to CoinMultiply</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginPage;
