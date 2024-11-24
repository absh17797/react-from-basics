import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

const PublicRoutes = ({ children, ...rest }) => {
    //   return <Routes><Route {...rest}>{children}</Route></Routes>;
  // You can add logic here, such as redirecting if needed, or simply render children.
  return <>{children}</>; // Render the child component (e.g., <Home />)
};

export default PublicRoutes;
