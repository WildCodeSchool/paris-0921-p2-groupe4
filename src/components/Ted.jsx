import React from 'react';

import ContentBox from './ContentBox';
import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';

export default function Ted() {
  const theme = 'NatGeo';
  const tweetNumber = '25';
  return (
    <>
      <div className="Text">
        <p> TedTalks </p>
      </div>
      <ContentBox theme={theme} tweetNumber={tweetNumber} />
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
