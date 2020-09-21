import React from 'react';
import styles from './FormInput.module.scss';
import PropTypes from 'prop-types';

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

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default FormInput;
