import React from 'react';
import './Header.css';
import Logo from '../Pictures/logo.png';
import Save from '../Pictures/heart.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <img src={Logo} className="Logo" height="70" width="auto" alt="logo-nasato" />
      <ul>
        <li>
          {' '}
          <Link to="/"> Nasato </Link>{' '}
        </li>
      </ul>
      <img src={Save} className="Save" height="30" alt="Save-nasato" />
    </div>
  );
}
