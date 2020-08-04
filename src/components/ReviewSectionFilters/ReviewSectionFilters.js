import React from 'react';
import styles from './ReviewSectionFilters.module.scss';

const ReviewSectionFilters = () => {
  return (
    <div className={styles.reviewSection}>
      <input type="text" placeholder="Search by review or category..." />

      <div>
        <button>
          <span className="far fa-window-maximize"></span>
        </button>
        <button>
          <span className="fas fa-bars"></span>
        </button>
      </div>
    </div>
  );
};

export default ReviewSectionFilters;
