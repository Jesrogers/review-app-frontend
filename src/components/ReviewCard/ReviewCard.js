import React from 'react';
import StarRating from '../StarRating/StarRating';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import styles from './ReviewCard.module.scss';

const ReviewCard = ({ review }) => {
  return (
    <article className={styles.reviewCard}>
      <header>
        <h3>{review.title}</h3>
      </header>
      <div className={styles.reviewCard__content}>
        <p>{review.description}</p>
      </div>
      <footer className={styles.reviewCard__footer}>
        <StarRating />
        <div className={styles.reviewCard__footer__actions}>
          <button>
            <FaRegEdit />
          </button>
          <button>
            <FaTrash />
          </button>
        </div>
      </footer>
    </article>
  );
};

export default ReviewCard;
