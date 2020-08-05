import React, { useState } from 'react';
import styles from './Reviews.module.scss';
import NoReviewsMessage from '../../components/NoReviewsMessage/NoReviewsMessage';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ReviewSectionFilters from '../../components/ReviewSectionFilters/ReviewSectionFilters';

const Reviews = ({ reviews }) => {
  const [rowLayout, setRowLayout] = useState(false);
  const layoutClass = rowLayout ? styles.rows : styles.cards;

  const handleRowLayoutChange = () => {
    setRowLayout(true);
  };

  const handleCardLayoutChange = () => {
    setRowLayout(false);
  };

  return (
    <section className={styles.reviewSection}>
      <header>
        <ReviewSectionFilters
          rowLayout={rowLayout}
          onRowLayoutChange={handleRowLayoutChange}
          onCardLayoutChange={handleCardLayoutChange}
        />
      </header>
      <div className={`${styles.reviewSection__content} ${layoutClass}`}>
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
