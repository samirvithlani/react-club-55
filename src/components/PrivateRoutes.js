import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


const usePrivateRoute = (isAuthenticated, redirectPath) => {
  const PrivateRoute = ({ path, ...props }) => {
    return isAuthenticated ? (
      <Route path={path} {...props} />
    ) : (
      <Navigate to={redirectPath} replace />
    );
  };

  return PrivateRoute;
};

export default usePrivateRoute;