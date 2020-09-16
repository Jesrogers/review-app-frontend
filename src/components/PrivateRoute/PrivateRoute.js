import React from 'react';
import PropTypes from 'prop-types';
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

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
