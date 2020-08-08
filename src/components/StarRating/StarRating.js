import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './StarRating.module.scss';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              className={styles.starRating__input}
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={20}
              className={styles.starRating__star}
              color={ratingValue <= (hover || rating) ? 'yellow' : '#2b2b2b'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
