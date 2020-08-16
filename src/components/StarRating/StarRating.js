import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './StarRating.module.scss';

const StarRating = ({
  scale = 5,
  rating,
  editMode = false,
  updateReviewRating,
}) => {
  const [starRating, setStarRating] = useState(0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setStarRating(rating);
  }, [rating]);

  const onRatingChange = (value) => {
    setStarRating(value);
    updateReviewRating(value);
  };

  const starArray = new Array(scale).fill();

  return (
    <div className="starContainer">
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
              onClick={() => onRatingChange(ratingValue)}
            />

            {editMode ? (
              <FaStar
                size={30}
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

StarRating.propTypes = {
  scale: PropTypes.number,
  rating: PropTypes.number,
  editMode: PropTypes.bool,
  updateReviewRating: PropTypes.func,
};

export default StarRating;
