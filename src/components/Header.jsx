import React from 'react';

import Logo from '../pictures/logo.png';
import Save from '../pictures/heart.png';
import aboutUs from '../pictures/about-us.png';

import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <a href="/">
        <img src={Logo} className="Logo" height="70" width="auto" alt="logo-nasato" />{' '}
      </a>
      <a href="/Apropos">
        <img src={aboutUs} className="Settings" height="40" width="40" color="#9050fd" alt="Save-nasato" />
      </a>
      <a href="/Favoris">
        <img src={Save} className="Save" height="30" alt="Save-nasato" />
      </a>
    </div>
  );
}
