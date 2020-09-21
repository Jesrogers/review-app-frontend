import React from 'react';
import styles from './FormFooter.module.scss';
import { Link } from 'react-router-dom';

const FormFooter = ({ linkPath, linkText }) => {
  return (
    <div className={styles.formFooter}>
      <Link to={linkPath}>{linkText}</Link>
      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </div>
  );
};

export default FormFooter;
