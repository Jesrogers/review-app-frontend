import React from 'react';
import styles from './FormTextarea.module.scss';
import PropTypes from 'prop-types';

const FormTextarea = ({
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
    <div className={styles.formTextarea}>
      <label htmlFor={id} className={styles.formTextarea__label}>
        {label}
      </label>
      <textarea
        id={id}
        className={styles.formTextarea__textarea}
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

FormTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default FormTextarea;
