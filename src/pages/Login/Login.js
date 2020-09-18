import React from 'react';
import styles from './Login.module.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setAuth, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section className={styles.loginSection}>
      <ToastContainer position="top-center" autoClose={2500} limit={3} />
      <div className={styles.loginSection__content}>
        <LoginForm setAuth={setAuth} />
      </div>
    </section>
  );
};

Login.propTypes = {
  setAuth: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Login;
