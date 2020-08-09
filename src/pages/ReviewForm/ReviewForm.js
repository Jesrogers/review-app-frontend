import React, { useState } from 'react';
import styles from './ReviewForm.module.scss';
import { useParams } from 'react-router-dom';
import StarRating from '../../components/StarRating/StarRating';

const ReviewForm = ({ addReview }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const { id } = useParams();

  const newReview = {
    title: title,
    description: description,
    rating: rating,
    id: Math.floor(Math.random() * 10000),
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addReview(newReview);
  };

  const handleRatingClick = (rating) => {
    setRating(rating);
  };

  return (
    <section className={styles.reviewFormSection}>
      <div className={styles.reviewFormSection__content}>
        <form className={styles.reviewFormSection__form} onSubmit={onSubmit}>
          <header>
            <h2>Add Review</h2>
          </header>
          <div className={styles.reviewFormSection__formContent}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title "
                type="text"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <StarRating
              editMode={true}
              updateReviewRating={handleRatingClick}
            />

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
