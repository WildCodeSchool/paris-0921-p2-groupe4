import React, { useState, useEffect } from 'react';

import ContentBox from './ContentBox';
import ThemeButton from './ThemeButton';
import NumberButton from './NumberButton';
import ImageButton from './ImageButton';

import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';

import './Text.css';
import './HappyNews.css';

function HappyNews() {
  const [theme, setTheme] = useState('Thom_astro');
  const [newTheme, setNewTheme] = useState('');
  const [tweetNumber, setTweetNumber] = useState(10);
  const [onlyTweetImages, setOnlyTweetImages] = useState(true);
  const [images, setImages] = useState('');

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

  function handleTweetImages() {
    setOnlyTweetImages(!onlyTweetImages);
  }
  useEffect(() => {
    if (onlyTweetImages === true) {
      setImages('%20has%3Aimages');
    } else {
      setImages('');
    }
  }, [onlyTweetImages]);

  return (
    <div className="PageScreen">
      <div className="TextBox">
        <p> You&apos;re viewing : &apos;{theme}&apos; </p>
        <ThemeButton handleNewTheme={handleNewTheme} handleThemeChange={handleThemeChange} newTheme={newTheme} />
        <NumberButton addTenMoreTweets={addTenMoreTweets} />
        <ImageButton handleTweetImages={handleTweetImages} />
      </div>
      <ContentBox images={images} theme={theme} tweetNumber={tweetNumber} />
      <div className="Swipe">
        <a href="/">
          <img className="Swipe-left" src={SwipeL} alt="Swipe-left"></img>
        </a>
        <a href="/Tendances">
          <img className="Swipe-right" src={SwipeR} alt="Swipe-right"></img>
        </a>
      </div>
    </div>
  );
}

export default HappyNews;
