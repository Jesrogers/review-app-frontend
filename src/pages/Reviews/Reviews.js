import React, { useState } from 'react';
import styles from './Reviews.module.scss';
import NoReviewsMessage from '../../components/NoReviewsMessage/NoReviewsMessage';
import Review from '../../components/Review/Review';
import ReviewSectionFilters from '../../components/ReviewSectionFilters/ReviewSectionFilters';
import PropTypes from 'prop-types';

const Reviews = ({
  rowLayout,
  reviews,
  deleteReview,
  handleRowLayoutChange,
  handleCardLayoutChange,
}) => {
  const [filterText, setFilterText] = useState('');

  const layoutClass = rowLayout ? 'rows' : 'cards';

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredReviews = reviews.filter((review) => {
    return (
      review.title.toLowerCase().includes(filterText.toLowerCase()) ||
      review.description.toLowerCase().includes(filterText.toLowerCase()) ||
      review.rating === Number(filterText)
    );
  });

  return (
    <section className={styles.reviewSection}>
      <header>
        <ReviewSectionFilters
          rowLayout={rowLayout}
          onRowLayoutChange={handleRowLayoutChange}
          onCardLayoutChange={handleCardLayoutChange}
          filterText={filterText}
          onFilterTextChange={handleFilterTextChange}
        />
      </header>
      <div className={`${styles.reviewSection__content} ${layoutClass}`}>
        {reviews.length ? (
          filteredReviews.map((review) => (
            <Review
              review={review}
              deleteReview={deleteReview}
              key={review.id}
            />
          ))
        ) : (
          <NoReviewsMessage />
        )}
      </div>
    </section>
  );
};

Reviews.propTypes = {
  rowLayout: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteReview: PropTypes.func.isRequired,
  handleRowLayoutChange: PropTypes.func.isRequired,
  handleCardLayoutChange: PropTypes.func.isRequired,
};

export default Reviews;
