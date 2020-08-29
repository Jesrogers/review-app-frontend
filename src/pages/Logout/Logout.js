import React, { useEffect } from 'react';

const Logout = ({ setAuth }) => {
  useEffect(() => {
    localStorage.removeItem('Authorized');
    setAuth(false);
  });
  return <h2>You have been logged out</h2>;
};

export default Logout;
