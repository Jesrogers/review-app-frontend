import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginValidation } from '../../utils/validations';
import PropTypes from 'prop-types';
import authService from '../../services/auth';
import { toast } from 'react-toastify';
import styles from './LoginForm.module.scss';

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
      <header>
        <h2>Login</h2>
      </header>
      <div className={styles.loginForm__content}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username ? (
            <p className={styles.error}>{errors.username}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password ? (
            <p className={styles.error}>{errors.password}</p>
          ) : null}
        </div>
        <div className={styles.loginForm__submitContainer}>
          <Link to="/register">Register a new account</Link>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  setAuth: PropTypes.func.isRequired,
};

export default LoginForm;
