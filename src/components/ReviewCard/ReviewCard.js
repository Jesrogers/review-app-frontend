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
      <footer className={styles.reviewCard__footer}>
        <p>Rating Stars</p>
        <div className={styles.reviewCard__footerActions}>
          <span className="far fa-edit"></span>
          <span className="fas fa-trash"></span>
        </div>
      </footer>
    </article>
  );
};

export default ReviewCard;
