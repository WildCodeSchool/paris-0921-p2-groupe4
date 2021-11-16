import React, { useState } from 'react';

import ContentBox from './ContentBox';
import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';

import './Text.css';
import ThemeButton from './ThemeButton';
import NumberButton from './NumberButton';

export default function National() {
  const [theme, setTheme] = useState('NatGeo');
  const [newTheme, setNewTheme] = useState('');
  const [tweetNumber, setTweetNumber] = useState(10);

  function handleNewTheme(e) {
    e.preventDefault();
    setNewTheme(e.target.value);
  }
  function handleThemeChange(e) {
    e.preventDefault();
    setTheme(newTheme);
  }

  function addTenMoreTweets() {
    setTweetNumber(tweetNumber + 10);
  }

  return (
    <>
      <div className="Text">
        <p> National Geographic! </p>
        <ThemeButton handleNewTheme={handleNewTheme} handleThemeChange={handleThemeChange} newTheme={newTheme} />
        <NumberButton addTenMoreTweets={addTenMoreTweets} />
      </div>
      <ContentBox theme={theme} tweetNumber={tweetNumber} />
      <div className="Swipe">
        <a href="/Tendances">
          <img className="Swipe-left" src={SwipeL} alt="Swipe-left"></img>
        </a>
        <a href="/Ted">
          <img className="Swipe-right" src={SwipeR} alt="Swipe-right"></img>
        </a>
      </div>
    </>
  );
}
