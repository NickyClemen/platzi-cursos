import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import { connect } from 'react-redux';

import { logoutRequest } from '../actions';

import gravatar from '../utils/gravatar';

import '../assets/styles/components/Header.scss';

import platziLogo from '../assets/static/logo-platzi.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';

    props.logoutRequest({});

    window.location.href = '/login';
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={platziLogo} alt='platzi-logo' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ? <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='user-icon' />
          }

          <p>Perfil</p>
        </div>

        <ul>
          {
            hasUser ? <li><a href='/'>{ user.name }</a></li> : null
          }

          {
            hasUser ? <li><Link to='/' onClick={handleLogout}>Cerrar sesión</Link></li> :
              <li><Link to='/login'>Iniciar sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
