import React, { useState, useEffect } from 'react';
import styles from './ReviewForm.module.scss';
import PropTypes from 'prop-types';
import { reviewFormValidation } from '../../utils/validations';
import { useParams, withRouter } from 'react-router-dom';
import reviewService from '../../services/reviews';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormInput from '../../components/FormInput/FormInput';
import FormTextarea from '../../components/FormTextarea/FormTextarea';
import StarRating from '../../components/StarRating/StarRating';

const ReviewForm = ({ addReview, updateReview, history }) => {
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

  const onSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      title: title,
      description: description,
      rating: rating,
    };

    const reviewValidationResult = reviewFormValidation(
      title,
      description,
      rating
    );
    setErrors(reviewValidationResult.errors);

    if (reviewValidationResult.isValid) {
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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form className={styles.reviewForm} onSubmit={onSubmit}>
          <FormHeader title={id ? 'Edit Review' : 'Add Review'} />
          <div className={styles.reviewForm__content}>
            <FormInput
              label="title"
              value={title}
              setValue={setTitle}
              errors={errors}
              maxLength={100}
            />
            <FormTextarea
              label="description"
              maxLength={300}
              value={description}
              setValue={setDescription}
              errors={errors}
            />
            <div className={styles.reviewForm__starContainer}>
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
      )}
    </>
  );
};

ReviewForm.propTypes = {
  addReview: PropTypes.func,
  updateReview: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(ReviewForm);
