import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../pictures/logo.png';
// import settingIcon from '../pictures/Settings-icon.jpg';
import Save from '../pictures/heart.png';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img src={Logo} className="Logo" height="70" width="auto" alt="logo-nasato" />{' '}
      </Link>
      <Link to="/Favoris">
        <img src={Save} className="Save" height="30" alt="Save-nasato" />
      </Link>
    </div>
  );
}

export default Header;
