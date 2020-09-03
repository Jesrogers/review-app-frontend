import React, { useState } from 'react';
import styles from './Register.module.scss';
import { useHistory, Redirect, Link } from 'react-router-dom';
import authService from '../../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ setAuth, isAuthenticated }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});

  const registerValidation = () => {
    const errors = {};
    const usernameRegex = RegExp(/^[a-zA-Z0-9]+$/);
    let isValid = true;

    if (!username || !username.trim()) {
      isValid = false;
      errors['username'] = 'Cannot be empty';
    }

    if (!usernameRegex.test(username)) {
      isValid = false;
      errors['username'] = 'Username only allows for alphanumeric characters';
    }

    if (username.length > 100) {
      isValid = false;
      errors['username'] = 'Username must be under 100 characters';
    }

    if (!password || !password.trim()) {
      isValid = false;
      errors['password'] = 'Cannot be empty';
    }

    if (password.length > 200) {
      isValid = false;
      errors['password'] = 'Password must be under 200 characters';
    }

    if (repeatPassword !== password) {
      isValid = false;
      errors['repeatPassword'] = 'Passwords must match';
    }

    setErrors(errors);

    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (registerValidation()) {
      try {
        await authService.register(username, password, repeatPassword);
        setAuth(true);

        history.push('/');
      } catch (err) {
        toast.error(err);
      }
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section className={styles.registerSection}>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={3}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.registerSection__content}>
        <form className={styles.registerSection__form} onSubmit={onSubmit}>
          <header>
            <h2>Register</h2>
          </header>
          <div className={styles.registerSection__formContent}>
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
            <div>
              <label htmlFor="repeatPassword">Repeat Password</label>
              <input
                type="password"
                required
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              {errors.repeatPassword ? (
                <p className={styles.error}>{errors.repeatPassword}</p>
              ) : null}
            </div>
            <div className={styles.submitContainer}>
              <Link to="/login">Login</Link>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
