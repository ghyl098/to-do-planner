import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 onClick={() => navigate("/")}>To-Do Planner</h2>
      </div>

      <div className="nav-center">
        <button onClick={() => navigate("/all")}>All Tasks</button>
        <button onClick={() => navigate("/completed")}>Completed</button>
        <button onClick={() => navigate("/pending")}>Pending</button>
      </div>

      <div className="nav-right">
        {user ? (
          <>
            <span className="nav-username">{user.displayName}</span>
            <Link to="/profile">
<img
  src={user.photo || "https://via.placeholder.com/150"}
  alt="profile"
  className="nav-profile"
  style={{
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #fff",
  }}
/>
            </Link>
            <button className="nav-logout" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="nav-login" to="/login">
              Login
            </Link>
            <button className="nav-google" onClick={handleGoogleSignIn}>
              Sign In with Google
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
