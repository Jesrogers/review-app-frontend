import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginValidation } from '../../utils/validations';
import PropTypes from 'prop-types';
import authService from '../../services/auth';
import { toast } from 'react-toastify';
import styles from './LoginForm.module.scss';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormInput from '../../components/FormInput/FormInput';
import FormFooter from '../../components/FormFooter/FormFooter';

const LoginForm = ({ setAuth }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

    const loginValidationResult = loginValidation(username, password);
    setErrors(loginValidationResult.errors);

    if (loginValidationResult.isValid) {
      try {
        await authService.login(username, password);
        setAuth(true);

        history.push('/');
      } catch (err) {
        toast.error(err);
      }
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={onSubmit}>
      <FormHeader title="Login" />
      <div className={styles.loginForm__content}>
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
        <FormFooter linkPath="/register" linkText="Register a new account" />
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  setAuth: PropTypes.func.isRequired,
};

export default LoginForm;
