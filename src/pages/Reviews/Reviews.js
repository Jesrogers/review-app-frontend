import React from 'react';
import styles from './Reviews.module.scss';
import NoReviewsMessage from '../../components/NoReviewsMessage/NoReviewsMessage';

const Reviews = () => {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.reviewSection__content}>
        <NoReviewsMessage />
      </div>
    </section>
  );
};

export default Reviews;
