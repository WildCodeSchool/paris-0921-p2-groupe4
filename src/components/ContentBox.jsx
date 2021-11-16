import React from 'react';

import TweetRequest from './tenTweetRequest';

import './contentBox.css';

function ContentBox({ images, theme, tweetNumber }) {
  return (
    <div className="tweet-result">
      <TweetRequest images={images} tweetNumber={tweetNumber} theme={theme} />
    </div>
  );
}

export default ContentBox;
