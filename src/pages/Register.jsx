import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // make sure Link is imported

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration not implemented. Use Google login for now.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>

      <p style={{ margin: "15px 0" }}>OR</p>
      <p style={{ marginBottom: "15px" }}>
        Sign in with Google to create an account instantly.
      </p>

      <p>
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#2980b9", fontWeight: "500" }}>
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
