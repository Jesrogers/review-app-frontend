import React, { useEffect } from 'react';
import request from '../../utils/request';

const Logout = ({ setAuth }) => {
  useEffect(() => {
    const logout = async () => {
      await request('/api/auth/logout', {
        method: 'POST',
      });
    };

    logout();
    setAuth(false);
  }, [setAuth]);
  return <h2>You have been logged out</h2>;
};

export default Logout;
