import React from 'react';
import StarRating from '../StarRating/StarRating';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './ReviewCard.module.scss';
import PropTypes from 'prop-types';

const ReviewCard = ({ review, onReviewDelete }) => {
  return (
    <article className={styles.reviewCard}>
      <header>
        <h3>{review.title}</h3>
      </header>
      <div className={styles.reviewCard__content}>
        <p>{review.description}</p>
      </div>
      <footer className={styles.reviewCard__footer}>
        <StarRating scale={5} rating={review.rating} />
        <div className={styles.reviewCard__footer__actions}>
          <Link to={`/review/${review.id}`}>
            <FaRegEdit />
          </Link>
          <button onClick={() => onReviewDelete(review.id)}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </article>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.number.isRequired,
  }),
};

export default ReviewCard;
