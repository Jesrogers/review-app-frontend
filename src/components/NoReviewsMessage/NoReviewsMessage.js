import React from 'react';
import styles from './NoReviewsMessage.module.scss';
import { Link } from 'react-router-dom';

const NoReviewsMessage = ({ isAuthenticated }) => {
  return (
    <>
      <div className={styles.messageContainer}>
        <p> It seems you have no reviews!</p>
        {isAuthenticated ? (
          <Link to="/review" className={styles.addBtn}>
            Add Review
          </Link>
        ) : (
          <Link to="/login" className={styles.addBtn}>
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default NoReviewsMessage;
