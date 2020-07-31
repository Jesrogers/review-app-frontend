import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <h1>Review App</h1>
      <ul>
        <li>
          <Link to="/">Reviews</Link>
        </li>
        <li>
          <Link to="/summary">Summary</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
