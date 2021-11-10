import React from 'react';

import TweetRequest from './tenTweetRequest';

import './contentBox.css';

function ContentBox() {
  return (
    <div className="tweet-result">
      <TweetRequest tweetNumber="25" theme="NatGeo" />
    </div>
  );
}

export default ContentBox;
