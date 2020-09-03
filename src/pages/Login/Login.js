import React, { useState } from 'react';
import styles from './Login.module.scss';
import { useHistory, Link, Redirect } from 'react-router-dom';
import authService from '../../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setAuth, isAuthenticated }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const loginValidation = () => {
    const errors = {};
    let isValid = true;

    if (!username || !username.trim()) {
      isValid = false;
      errors['username'] = 'Cannot be empty';
    }
    if (!password || !password.trim()) {
      isValid = false;
      errors['password'] = 'Cannot be empty';
    }

    setErrors(errors);

    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (loginValidation()) {
      try {
        await authService.login(username, password);
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
    <section className={styles.loginSection}>
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
      <div className={styles.loginSection__content}>
        <form className={styles.loginSection__form} onSubmit={onSubmit}>
          <header>
            <h2>Login</h2>
          </header>
          <div className={styles.loginSection__formContent}>
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
            <div className={styles.submitContainer}>
              <Link to="/register">Register</Link>
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

export default Login;
