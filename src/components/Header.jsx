import React from 'react';
import './Header.css';
import Logo from '../pictures/logo.png';
import Save from '../pictures/heart.png';

export default function Header() {
  return (
    <div className="Header">
      <a href="/">
        <img src={Logo} className="Logo" height="70" width="auto" alt="logo-nasato" />{' '}
      </a>
      <a href="/Favoris">
        <img src={Save} className="Save" height="30" alt="Save-nasato" />
      </a>
    </div>
  );
}
