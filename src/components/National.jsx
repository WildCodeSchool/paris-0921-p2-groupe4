import React from 'react';
import './Text.css';

import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';

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
