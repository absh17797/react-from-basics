import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useAuth } from '../context/AuthContext'; // Custom hook for auth and roles
const Header = () => {
  const { user } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">Todo App</a>
        <div className="ms-auto">
          <span className="navbar-text text-light"><b>{user?.username}</b></span>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
          pauseOnHover
        />
      </div>
    </nav>
  )
};

export default Header;
