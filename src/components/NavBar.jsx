import React, {useState, useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Custom hook for auth and roles
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loggedInUser, setLoggedInUser] = useState(user);
  useEffect(() => {
    setLoggedInUser(user); // Re-render Navbar when `user` updates
  }, [user]);

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

            <li className="nav-item fw-bold">
              <Link className="nav-link text-light fw-semibold" to="/admin">
                Dashboard
              </Link>
            </li>

            <li className="nav-item fw-bold">
              <Link className="nav-link text-light fw-semibold" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item fw-bold">
              <Link className="nav-link text-light fw-semibold" to="/signUp">
                Sign Up
              </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link className="nav-link text-light fw-semibold" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link className="nav-link text-light fw-semibold" to="/studentForm">
                Student Form
              </Link>
            </li>


          </ul>

          {/* Optional Call to Action Button */}
          {
            user && <button className="btn btn-light btn-sm ms-3 text-primary fw-bold"
              onClick={() => {
                dispatch(logout());
              }}>Logout </button>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
