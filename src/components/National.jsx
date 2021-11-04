import React from 'react';

import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';

import './Text.css';

export default function National() {
  return (
    <>
      <div className="Text">
        <p> National </p>
      </div>
      <div className="Swipe">
        <a href="/Tendances">
          <img className="Swipe-left" src={SwipeL} alt="Swipe-left"></img>
        </a>
        <a href="/TedTalks">
          <img className="Swipe-right" src={SwipeR} alt="Swipe-right"></img>
        </a>
      </div>
    </>
  );
}
