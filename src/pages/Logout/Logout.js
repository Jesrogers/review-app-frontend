import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import authService from '../../services/auth';

const Logout = ({ setAuth, isAuthenticated }) => {
  useEffect(() => {
    const logout = async () => {
      if (isAuthenticated) {
        await authService.logout();
      }
    };

    logout();
    setAuth(false);
  }, [setAuth, isAuthenticated]);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <h2>You have been logged out</h2>;
};

export default Logout;
