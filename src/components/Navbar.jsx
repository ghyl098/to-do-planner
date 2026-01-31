import React from "react";
import { NavLink, Link } from "react-router-dom"; // import Link

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Make logo clickable */}
      <h1 className="navbar-logo">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          To-Do Planner
        </Link>
      </h1>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/all" className={({ isActive }) => (isActive ? "active" : "")}>
            All Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" className={({ isActive }) => (isActive ? "active" : "")}>
            Completed
          </NavLink>
        </li>
        <li>
          <NavLink to="/pending" className={({ isActive }) => (isActive ? "active" : "")}>
            Pending
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
