import React from 'react';
import styles from './NoReviewsMessage.module.scss';

const NoReviewsMessage = () => {
  return (
    <>
      <div className={styles.messageContainer}>
        <p> It seems you have no reviews!</p>
        <button>Add Review</button>
      </div>
    </>
  );
};

export default NoReviewsMessage;
