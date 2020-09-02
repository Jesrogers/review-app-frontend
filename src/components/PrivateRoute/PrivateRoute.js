import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, path, exact, children }) => {
  if (isAuthenticated) {
    return (
      <Route path={path} exact={exact}>
        {children}
      </Route>
    );
  }

  return <Redirect to="/login" />;
};

export default PrivateRoute;
