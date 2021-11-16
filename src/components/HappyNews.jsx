import React from 'react';

import ContentBox from './ContentBox';
import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';

import './HappyNews.css';

export default function HappyNews() {
  const theme = 'Thom_astro';
  const tweetNumber = '25';
  return (
    <>
      <div className="Text">
        <p> Happy News!</p>
      </div>
      <ContentBox theme={theme} tweetNumber={tweetNumber} />
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
