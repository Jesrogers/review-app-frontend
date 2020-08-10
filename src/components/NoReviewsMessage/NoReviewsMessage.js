import React from 'react';
import styles from './NoReviewsMessage.module.scss';
import { Link } from 'react-router-dom';

const NoReviewsMessage = () => {
  return (
    <>
      <div className={styles.messageContainer}>
        <p> It seems you have no reviews!</p>
        <Link to="/review" className={styles.addBtn}>
          Add Review
        </Link>
      </div>
    </>
  );
};

export default NoReviewsMessage;
