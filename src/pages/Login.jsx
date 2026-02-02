import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom"; // make sure Link is imported

const Login = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = (e) => {
    e.preventDefault();
    alert("Email login not implemented yet. Please use Google login.");
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p style={{ margin: "15px 0" }}>OR</p>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>

      <p style={{ marginTop: "15px" }}>
        New user?{" "}
        <Link to="/register" style={{ color: "#2980b9", fontWeight: "500" }}>
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
