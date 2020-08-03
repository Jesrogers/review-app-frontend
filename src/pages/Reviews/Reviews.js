import React from 'react';
import styles from './Reviews.module.scss';
import NoReviewsMessage from '../../components/NoReviewsMessage/NoReviewsMessage';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

const Reviews = ({ reviews }) => {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.reviewSection__content}>
        {reviews.length ? (
          reviews.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))
        ) : (
          <NoReviewsMessage />
        )}
      </div>
    </section>
  );
};

export default Reviews;
