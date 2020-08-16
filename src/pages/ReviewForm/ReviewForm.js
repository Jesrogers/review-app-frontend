import React, { useState, useEffect } from 'react';
import styles from './ReviewForm.module.scss';
import PropTypes from 'prop-types';
import { useParams, withRouter } from 'react-router-dom';
import reviewService from '../../services/reviews';
import StarRating from '../../components/StarRating/StarRating';

const ReviewForm = ({ addReview, history, updateReview }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    const getReview = async () => {
      if (id) {
        const fetchedReview = await reviewService.getReview(Number(id));

        if (fetchedReview) {
          setTitle(fetchedReview.title);
          setDescription(fetchedReview.description);
          setRating(fetchedReview.rating);
        }
      }
    };

    getReview();
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: id ? Number(id) : null,
      title: title,
      description: description,
      rating: rating,
    };

    if (id) {
      updateReview(Number(id), newReview);
    } else {
      addReview(newReview);
    }

    history.push('/');
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
                id="title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <StarRating
              editMode={true}
              rating={rating}
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

ReviewForm.propTypes = {
  addReview: PropTypes.func,
  updateReview: PropTypes.func,
};

export default withRouter(ReviewForm);
