import React from 'react';
import StarRating from '../StarRating/StarRating';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Review.module.scss';
import PropTypes from 'prop-types';

const Review = ({ review, deleteReview }) => {
  const handleReviewDelete = () => {
    if (window.confirm(`Delete the ${review.title} review?`)) {
      deleteReview(review.id);
    }
  };

  return (
    <article className={styles.review}>
      <header>
        <h3>{review.title}</h3>
      </header>
      <div className={styles.review__content}>
        <p>{review.description}</p>
      </div>
      <footer className={styles.review__footer}>
        <StarRating scale={5} rating={review.rating} />
        <div className={styles.review__footer__actions}>
          <Link to={`/review/${review.id}`}>
            <FaRegEdit />
          </Link>
          <button onClick={() => handleReviewDelete()}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </article>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.number.isRequired,
  }),
  deleteReview: PropTypes.func.isRequired,
};

export default Review;
