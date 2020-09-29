import React from 'react';
import styles from './FormInput.module.scss';
import PropTypes from 'prop-types';

const FormInput = ({
  label,
  id = label,
  type = 'text',
  required = true,
  value,
  setValue,
  errors,
  maxLength,
}) => {
  return (
    <div className={styles.formInput}>
      <label htmlFor={id} className={styles.formInput__label}>
        {label}
      </label>
      <input
        id={id}
        className={styles.formInput__input}
        type={type}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {errors[id] ? <p className={styles.error}>{errors[id]}</p> : null}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default FormInput;
