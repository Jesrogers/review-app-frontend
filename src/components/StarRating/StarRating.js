import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './StarRating.module.scss';

const StarRating = ({ scale, rating, editMode = false }) => {
  const [starRating, setStarRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setStarRating(rating);
  }, [rating]);

  const starArray = new Array(scale).fill();

  return (
    <div className={styles.starRating}>
      {starArray.map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              disabled={editMode ? false : true}
              className={styles.starRating__input}
              value={ratingValue}
              onClick={() => setStarRating(ratingValue)}
            />

            {editMode ? (
              <FaStar
                size={20}
                className={`${styles.starRating__star} ${styles.editable}`}
                color={
                  ratingValue <= (hover || starRating) ? 'yellow' : '#2b2b2b'
                }
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            ) : (
              <FaStar
                size={20}
                className={styles.starRating__star}
                color={
                  ratingValue <= (hover || starRating) ? 'yellow' : '#2b2b2b'
                }
              />
            )}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
