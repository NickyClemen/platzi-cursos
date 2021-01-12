import React, { useState, Fragment } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { registerUser } from '../actions';

import Header from '../components/Header';

import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.registerUser(form, 'http://localhost:3000/login');
  };

  return (
    <Fragment>
      <Header isRegister />

      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>

          <form className='register__container--form' action='' onSubmit={handleSubmit}>
            <input
              name='name'
              className='input'
              type='text'
              placeholder='Nombre'
              onChange={handleInput}
            />

            <input
              name='email'
              className='input'
              type='email'
              placeholder='Correo electrónico'
              onChange={handleInput}
            />

            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />

            <button className='button' type='submit'>Registrarme</button>

            <div className='register__container--form-init'>
              <Link to='/login'>Iniciar sesión</Link>
            </div>
          </form>
        </section>
      </section>
    </Fragment>
  );
};

const mapDispatchToProps = {
  registerUser,
};

Register.propTypes = {
  registerUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Register);
