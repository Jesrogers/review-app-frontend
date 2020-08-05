import React from 'react';
import styles from './ReviewSectionFilters.module.scss';

const ReviewSectionFilters = ({
  rowLayout,
  onRowLayoutChange,
  onCardLayoutChange,
}) => {
  return (
    <div className={styles.reviewSection}>
      <input type="text" placeholder="Search by review or category..." />

      <div>
        <button
          className={rowLayout ? null : styles.active}
          onClick={onCardLayoutChange}
        >
          <span className="far fa-window-maximize"></span>
        </button>
        <button
          className={rowLayout ? styles.active : null}
          onClick={onRowLayoutChange}
        >
          <span className="fas fa-bars"></span>
        </button>
      </div>
    </div>
  );
};

export default ReviewSectionFilters;
