import React from 'react';
import styles from './ReviewSectionFilters.module.scss';

const ReviewSectionFilters = () => {
  return (
    <div className={styles.reviewSection}>
      <input type="text" placeholder="Search by review or category..." />

      <div>
        <span className="far fa-window-maximize"></span>

        <span className="fas fa-bars"></span>
      </div>
    </div>
  );
};

export default ReviewSectionFilters;
