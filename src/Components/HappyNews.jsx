import React from 'react';
import './HappyNews.css';

import SwipeR from '../Pictures/swipe-right.png';
import SwipeL from '../Pictures/swipe-left.png';

export default function HappyNews() {
  return (
    <>
      <div className="Text">
        <p> Happy news </p>
      </div>
      <div className="Swipe">
        <a href="/">
          <img className="Swipe-left" src={SwipeL} alt="Swipe-left"></img>
        </a>
        <a href="/Tendances">
          <img className="Swipe-right" src={SwipeR} alt="Swipe-right"></img>
        </a>
      </div>
    </>
  );
}
