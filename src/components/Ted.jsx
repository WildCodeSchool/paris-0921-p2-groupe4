import React from 'react';

import Content from './content';
import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';

export default function Ted() {
  return (
    <>
      <div className="Text">
        <p> TED talks </p>
      </div>
      <Content />
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
