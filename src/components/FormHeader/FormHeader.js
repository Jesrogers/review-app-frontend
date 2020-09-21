import React from 'react';
import styles from './FormHeader.module.scss';

const FormHeader = ({ title }) => {
  return (
    <header className={styles.formHeader}>
      <h2>{title}</h2>
    </header>
  );
};

export default FormHeader;
