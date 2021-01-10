import React from 'react';

import '../assets/styles/components/Header.scss';

import platziLogo from '../assets/static/logo-platzi.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
    <header className="header">
        <img className="header__img" src={ platziLogo } alt="platzi-logo" />

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={ userIcon } alt="user-icon" />

                <p>Perfil</p>
            </div>

            <ul>
                <li>
                    <a href="/">Cuenta</a>
                </li>
                <li>
                    <a href="/">Cerrar sesión</a>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;