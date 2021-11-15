import React from 'react';
import './Text.css';

import Content from './Content';
import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';

export default function Tendances() {
  return (
    <>
      <div className="Text">
        <p> Tendances </p>
      </div>
      <Content />
      <div className="Swipe">
        <a href="/Happynews">
          <img className="Swipe-left" src={SwipeL} alt="Swipe-left"></img>
        </a>
        <a href="/National">
          <img className="Swipe-right" src={SwipeR} alt="Swipe-right"></img>
        </a>
      </div>
    </>
  );
}
