import React, { useState, useEffect } from 'react';
import styles from './ReviewForm.module.scss';
import PropTypes from 'prop-types';
import { useParams, withRouter } from 'react-router-dom';
import reviewService from '../../services/reviews';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import StarRating from '../../components/StarRating/StarRating';

const ReviewForm = ({ addReview, history, updateReview }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(null);
  const [errors, setErrors] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getReview = async () => {
      if (id) {
        const fetchedReview = await reviewService.getReview(Number(id));
        setTitle(fetchedReview.title);
        setDescription(fetchedReview.description);
        setRating(fetchedReview.rating);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    try {
      getReview();
    } catch (err) {
      toast.error(err, {
        autoClose: false,
      });
    }
  }, [id]);

  const formValidation = () => {
    const errors = {};
    let isValid = true;

    if (!title.trim()) {
      isValid = false;
      errors['title'] = 'Cannot be empty';
    }

    if (title.length > 100) {
      isValid = false;
      errors['title'] = 'Title must be 100 characters or less';
    }

    if (description.length > 300) {
      isValid = false;
      errors['description'] = 'Description must be 300 characters or less';
    }

    if (!rating || rating < 1 || rating > 5) {
      isValid = false;
      errors['rating'] = 'Select a valid rating';
    }

    setErrors(errors);

    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      title: title,
      description: description,
      rating: rating,
    };

    if (formValidation()) {
      try {
        if (id) {
          await updateReview(Number(id), newReview);
          history.push('/');
        } else {
          await addReview(newReview);
          history.push('/');
        }
      } catch (err) {
        toast.error(err);
      }
    }
  };

  const handleRatingClick = (rating) => {
    setRating(rating);
  };

  if (isLoading) {
    return (
      <section className={styles.reviewFormSection}>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className={styles.reviewFormSection__content}>
          <Loader />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.reviewFormSection}>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                maxLength="100"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title ? (
                <p className={styles.error}>{errors.title}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                maxLength="300"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {errors.description ? (
                <p className={styles.error}>{errors.description}</p>
              ) : null}
            </div>
            <div>
              <StarRating
                editMode={true}
                rating={rating}
                updateReviewRating={handleRatingClick}
              />
              {errors.rating ? (
                <p className={styles.error}>{errors.rating}</p>
              ) : null}
            </div>

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
