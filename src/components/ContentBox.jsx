import React from 'react';

import TweetRequest from './tenTweetRequest';

import './contentBox.css';

function ContentBox({ theme, tweetNumber }) {
  return (
    <div className="tweet-result">
      <TweetRequest tweetNumber={tweetNumber} theme={theme} />
    </div>
  );
}

export default ContentBox;
