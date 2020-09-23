import React from 'react';
import styles from './Register.module.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Register = ({ setAuth, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section className={styles.registerSection}>
      <ToastContainer position="top-center" autoClose={2500} limit={3} />
      <div className={styles.registerSection__content}>
        <RegisterForm setAuth={setAuth} />
      </div>
    </section>
  );
};

Register.propTypes = {
  setAuth: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Register;
