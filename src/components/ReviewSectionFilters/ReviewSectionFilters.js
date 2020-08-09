import React from 'react';
import styles from './ReviewSectionFilters.module.scss';
import { Link } from 'react-router-dom';
import { FaRegWindowMaximize, FaBars, FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ReviewSectionFilters = ({
  rowLayout,
  onRowLayoutChange,
  onCardLayoutChange,
  filterText,
  onFilterTextChange,
}) => {
  return (
    <div className={styles.reviewSectionFilters}>
      <div className={styles.reviewSectionFilters__inputContainer}>
        <input
          type="text"
          placeholder="Search by review..."
          value={filterText}
          onChange={onFilterTextChange}
        />
        <Link to={'/review'} className={styles.addBtn}>
          <FaPlus />
        </Link>
      </div>

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

ReviewSectionFilters.propTypes = {
  rowLayout: PropTypes.bool,
  onRowLayoutChange: PropTypes.func.isRequired,
  onCardLayoutChange: PropTypes.func.isRequired,
  filterText: PropTypes.string,
  onFilterTextChange: PropTypes.func.isRequired,
};

export default ReviewSectionFilters;
