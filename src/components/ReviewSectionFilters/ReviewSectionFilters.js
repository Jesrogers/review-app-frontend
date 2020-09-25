import React from 'react';
import styles from './ReviewSectionFilters.module.scss';
import { Link } from 'react-router-dom';
import { FaRegWindowMaximize, FaBars, FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ReviewSectionFilters = ({
  rowLayout,
  setRowLayout,
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
          onClick={() => setRowLayout(false)}
        >
          <FaRegWindowMaximize />
        </button>
        <button
          className={rowLayout ? styles.active : null}
          onClick={() => setRowLayout(true)}
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
};

ReviewSectionFilters.propTypes = {
  rowLayout: PropTypes.bool,
  setRowLayout: PropTypes.func.isRequired,
  filterText: PropTypes.string,
  onFilterTextChange: PropTypes.func.isRequired,
};

export default ReviewSectionFilters;
