import React from 'react';
import styles from './ReviewSectionFilters.module.scss';
import { FaRegWindowMaximize, FaBars } from 'react-icons/fa';

const ReviewSectionFilters = ({
  rowLayout,
  onRowLayoutChange,
  onCardLayoutChange,
}) => {
  return (
    <div className={styles.reviewSectionFilters}>
      <input type="text" placeholder="Search by review..." />

      <div className={styles.reviewSectionFilters__buttonContainer}>
        <button
          className={rowLayout ? null : styles.active}
          onClick={onCardLayoutChange}
        >
          <FaRegWindowMaximize />
        </button>
        <button
          className={rowLayout ? styles.active : null}
          onClick={onRowLayoutChange}
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default ReviewSectionFilters;
