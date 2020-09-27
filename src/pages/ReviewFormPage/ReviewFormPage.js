import React from 'react';
import styles from './ReviewFormPage.module.scss';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

const ReviewFormPage = ({ addReview, updateReview }) => {
  return (
    <section className={styles.reviewFormSection}>
      <ToastContainer position="top-center" autoClose={2500} limit={3} />
      <div className={styles.reviewFormSection__content}>
        <ReviewForm addReview={addReview} updateReview={updateReview} />
      </div>
    </section>
  );
};

ReviewFormPage.propTypes = {
  addReview: PropTypes.func,
  updateReview: PropTypes.func,
  history: PropTypes.object,
};

export default ReviewFormPage;
