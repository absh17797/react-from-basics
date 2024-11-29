import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
  <div className="container">
    {/* Brand Logo */}
    <Link className="navbar-brand fw-bold" to="/">
      <i className="bi bi-list-task me-2"></i>Absh ToDo App
    </Link>

    {/* Toggle Button for Small Screens */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/about-us">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/contact">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/admin">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/counter">
            Counter
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/profile">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/todos">
            ToDos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/todos/add">
            Add ToDos
          </Link>
        </li>
      </ul>

      {/* Optional Call to Action Button */}
      <button className="btn btn-light btn-sm ms-3 text-primary fw-bold">
        <i className="bi bi-box-arrow-in-right me-2"></i>Login
      </button>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
