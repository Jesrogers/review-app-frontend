import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <h1>Review App</h1>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Reviews</Link>
          </li>
          <li className={styles.item}>
            {isAuthenticated ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
