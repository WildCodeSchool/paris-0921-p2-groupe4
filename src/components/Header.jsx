import React from 'react';

import Logo from '../pictures/logo.png';
// import Save from '../pictures/heart.png';

// import aboutUs from '../pictures/aboutUs.png';
import settingIcon from '../pictures/Settings-icon.jpg';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <a href="/">
        <img src={Logo} className="Logo" height="70" width="auto" alt="logo-nasato" />{' '}
      </a>
      <a href="/Apropos">
        <img src={settingIcon} className="settings" height="60" width="60" alt="aboutUs-nasato" />
      </a>
    </div>
  );
}

export default Header;
