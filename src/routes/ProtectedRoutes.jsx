import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Custom hook for auth and roles

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure(); // Initialize toast notifications

const ProtectedRoutes = ({ children, role }) => {
  const { user } = useAuth();
  const [isForbidden, setIsForbidden] = useState(false); // State to manage redirection delay

  useEffect(() => {
    // alert("1")
    if (user && user.role !== role) {
      toast.error('You are forbidden to access this route!', {
        position: toast.POSITION.TOP_CENTER,
      });

      // Delay redirection to allow toast to show
      const timer = setTimeout(() => setIsForbidden(true), 3000);
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [user, role]);
  // alert("2")
  // Check user role
  if (user && user.role === role) {
    return children;
  }

  return <Navigate to="/" />;
};

export default ProtectedRoutes;
