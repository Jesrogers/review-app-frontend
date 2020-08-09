import React from 'react';
import styles from './ReviewForm.module.scss';
import { useParams } from 'react-router-dom';
import StarRating from '../../components/StarRating/StarRating';

const ReviewForm = () => {
  const { id } = useParams();

  return (
    <section className={styles.reviewFormSection}>
      <div className={styles.reviewFormSection__content}>
        <form className={styles.reviewFormSection__form}>
          <header>
            <h2>Add Review</h2>
          </header>
          <div className={styles.reviewFormSection__formContent}>
            <div>
              <label htmlFor="title">Title</label>
              <input id="title " type="text" />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea id="description"></textarea>
            </div>
            <StarRating editMode={true} />

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
