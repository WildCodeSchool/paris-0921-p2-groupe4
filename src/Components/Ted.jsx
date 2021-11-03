import React from 'react';

import SwipeR from '../Pictures/swipe-right.png';
import SwipeL from '../Pictures/swipe-left.png';

export default function Ted() {
  return (
    <>
      <div className="Text">
        <p> TED talks </p>
      </div>
      <div className="Swipe">
        <a href="/National">
          <img className="Swipe-left" src={SwipeL} alt="Swipe-left"></img>
        </a>
        <a href="/">
          <img className="Swipe-right" src={SwipeR} alt="Swipe-right"></img>
        </a>
      </div>
    </>
  );
}
