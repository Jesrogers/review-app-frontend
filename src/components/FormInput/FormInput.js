import React from 'react';
import styles from './FormInput.module.scss';

const FormInput = ({
  label,
  type = 'text',
  required = true,
  value,
  setValue,
  errors,
}) => {
  return (
    <div className={styles.formInput__container}>
      <label htmlFor={label} className={styles.formInput__label}>
        {label}
      </label>
      <input
        id={label}
        className={styles.formInput__input}
        type={type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {errors[label] ? <p className={styles.error}>{errors[label]}</p> : null}
    </div>
  );
};

export default FormInput;
