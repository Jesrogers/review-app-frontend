import React, { useState } from 'react';
import { registerValidation } from '../../utils/validations';
import { useHistory } from 'react-router-dom';
import authService from '../../services/auth';
import { toast } from 'react-toastify';
import styles from './RegisterForm.module.scss';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormInput from '../../components/FormInput/FormInput';
import FormFooter from '../../components/FormFooter/FormFooter';
import PropTypes from 'prop-types';

const RegisterForm = ({ setAuth }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

    const registerValidationResult = registerValidation(
      username,
      password,
      repeatPassword
    );

    if (registerValidationResult.isValid) {
      try {
        await authService.register(username, password, repeatPassword);
        setAuth(true);

        history.push('/');
      } catch (err) {
        toast.error(err);
      }
    } else {
      setErrors(registerValidationResult.errors);
    }
  };

  return (
    <form className={styles.registerForm} onSubmit={onSubmit}>
      <FormHeader title="Register" />
      <div className={styles.registerForm__content}>
        <FormInput
          label="username"
          value={username}
          setValue={setUsername}
          errors={errors}
        />
        <FormInput
          label="password"
          type="password"
          value={password}
          setValue={setPassword}
          errors={errors}
        />
        <FormInput
          label="Repeat Password"
          type="password"
          id="repeatPassword"
          value={repeatPassword}
          setValue={setRepeatPassword}
          errors={errors}
        />
        <FormFooter linkPath="/login" linkText="Login" />
      </div>
    </form>
  );
};

RegisterForm.propTypes = {
  setAuth: PropTypes.func.isRequired,
};

export default RegisterForm;
