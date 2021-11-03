import React from 'react';

function MultipleTweets({ tweetDisplay }) {
  return (
    <div>
      {tweetDisplay.data.map((tweet) => {
        return (
          <div key={tweet.id}>
            <p> {tweet.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MultipleTweets;
