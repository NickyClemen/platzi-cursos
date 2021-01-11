import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import twitterIcon from '../assets/static/twitter-icon.png';
import googleIcon from '../assets/static/google-icon.png';

import Header from '../components/Header';

import '../assets/styles/components/Login.scss';

const Login = props => {
    const [form, setValues] = useState({
        email: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        props.loginRequest(form);
        props.history.push('/');
    };

    return (
        <Fragment>
            <Header isLogin />

            <section className="login">
                <section className="login__container">
                    <h2 tabindex="0">Inicio de sesión</h2>

                    <form className="login__container--form" action="" onSubmit={handleSubmit}>
                        <input
                            name="email"
                            aria-label="Correo"
                            className="input"
                            type="text"
                            placeholder="Correo"
                            onChange={handleInput}
                        />

                        <input
                            name="password"
                            aria-label="Contraseña"
                            className="input"
                            type="password"
                            placeholder="Contraseña"
                            onChange={handleInput}
                        />

                        <button className="button">Iniciá sesión</button>

                        <div className="login__container--remember-me">
                            <label>
                                <input aria-label="Recuérdame" type="checkbox" id="cbox1" value="checkbox" />Recuérdame
                            </label>

                            <a href="/">Olvidé mi contraseña</a>
                        </div>

                    </form>

                    <section className="login__container--social-media">
                        <div>
                            <img src={googleIcon} alt="Google" />
                            Iniciá sesión con Google
                        </div>

                        <div>
                            <img src={twitterIcon} alt="Twitter" />
                            Iniciá sesión con Twitter
                        </div>

                    </section>

                    <p className="login__container--register">No tenés ninguna cuenta, <Link to="/register">registrate</Link></p>
                </section>
            </section>
        </Fragment>
    );
};

const mapDispatchToProps = {
    loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
