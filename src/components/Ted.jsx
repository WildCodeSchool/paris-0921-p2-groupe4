import React from 'react';

import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';
import Content from './Content.jsx';

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
