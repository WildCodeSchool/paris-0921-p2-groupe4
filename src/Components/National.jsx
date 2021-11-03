import React from 'react';
import './Text.css';

import SwipeR from '../Pictures/swipe-right.png';
import SwipeL from '../Pictures/swipe-left.png';

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
