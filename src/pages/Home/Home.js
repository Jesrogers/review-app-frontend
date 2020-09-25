import React, { useState } from 'react';
import styles from './Home.module.scss';
import NoReviewsMessage from '../../components/NoReviewsMessage/NoReviewsMessage';
import Loader from '../../components/Loader/Loader';
import Review from '../../components/Review/Review';
import ReviewSectionFilters from '../../components/ReviewSectionFilters/ReviewSectionFilters';
import PropTypes from 'prop-types';

const Home = ({ reviews, deleteReview, isLoading, isAuthenticated }) => {
  const [filterText, setFilterText] = useState('');
  const [rowLayout, setRowLayout] = useState(false);

  let layoutClass = 'empty';
  let filteredReviews;
  let content;

  if (reviews.length) {
    filteredReviews = reviews.filter((review) => {
      return (
        review.title.toLowerCase().includes(filterText.toLowerCase()) ||
        review.description.toLowerCase().includes(filterText.toLowerCase()) ||
        review.rating === Number(filterText)
      );
    });

    rowLayout ? (layoutClass = 'rows') : (layoutClass = 'cards');
  }

  if (isLoading) {
    content = <Loader />;
  } else if (reviews.length) {
    content = filteredReviews.map((review) => (
      <Review review={review} deleteReview={deleteReview} key={review.id} />
    ));
  } else {
    content = <NoReviewsMessage isAuthenticated={isAuthenticated} />;
  }

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <section className={styles.reviewSection}>
      <header>
        <ReviewSectionFilters
          rowLayout={rowLayout}
          setRowLayout={setRowLayout}
          filterText={filterText}
          onFilterTextChange={handleFilterTextChange}
        />
      </header>
      <div className={`${styles.reviewSection__content} ${layoutClass}`}>
        {content}
      </div>
    </section>
  );
};

Home.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      rating: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteReview: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Home;
