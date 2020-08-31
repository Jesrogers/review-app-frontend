import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, path, children }) => {
  if (isAuthenticated) {
    return <Route path={path}>{children}</Route>;
  }

  return <Redirect to="/login" />;
};

export default PrivateRoute;
