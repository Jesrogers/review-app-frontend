import React from 'react';
import styles from './FormHeader.module.scss';
import PropTypes from 'prop-types';

const FormHeader = ({ title }) => {
  return (
    <header className={styles.formHeader}>
      <h2>{title}</h2>
    </header>
  );
};

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormHeader;
