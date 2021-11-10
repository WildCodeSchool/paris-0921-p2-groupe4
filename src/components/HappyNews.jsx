import React from 'react';

import Content from './content';
import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';

import './HappyNews.css';

export default function HappyNews() {
  return (
    <>
      <div className="Text">
        <p> Happy news </p>
      </div>
      <Content />
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
