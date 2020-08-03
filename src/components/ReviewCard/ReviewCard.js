import React from 'react';
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
      <footer>
        
      </footer>
    </article>
  );
};

export default ReviewCard;
