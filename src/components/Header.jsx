import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../pictures/logo.png';
import settingIcon from '../pictures/Settings-icon.jpg';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img src={Logo} className="Logo" height="50" width="50" alt="logo-nasato" />{' '}
      </Link>
      <Link to="/a-propos">
        <img src={settingIcon} className="settings" height="60" wdith="60" alt="settings-nasato" />
      </Link>
    </div>
  );
}

export default Header;
