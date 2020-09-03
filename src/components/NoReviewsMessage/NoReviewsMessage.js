import React from 'react';
import styles from './NoReviewsMessage.module.scss';
import { Link } from 'react-router-dom';

const NoReviewsMessage = ({ isAuthenticated }) => {
  return (
    <>
      <div className={styles.messageContainer}>
        {isAuthenticated ? (
          <>
            <p>
              It seems you have no reviews! <br></br> Click the + icon above or
              the button below.
            </p>
            <Link to="/review" className={styles.addBtn}>
              Add Review
            </Link>
          </>
        ) : (
          <>
            <p>
              It seems you have no reviews! <br></br> Click to button below to
              login or register an account.
            </p>
            <Link to="/login" className={styles.addBtn}>
              Login
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default NoReviewsMessage;
