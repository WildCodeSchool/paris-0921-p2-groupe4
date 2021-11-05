import React from 'react';

function MultipleTweets({ tenTweets }) {
  return (
    <div>
      {tenTweets &&
        tenTweets.data.map((tweet, [i]) => {
          const tweetObject = {
            id: tweet.id,
            text: tweet.text,
            url: tenTweets.includes.media[i].url,
            user: tenTweets.includes.users[i].name,
          };
          return (
            <div key={tweetObject.id}>
              <p>{tweetObject.text}</p>
              <img src={tweetObject.url} alt="tweetimg" />
              <p>{tweetObject.user}</p>
            </div>
          );
        })}
    </div>
  );
}

export default MultipleTweets;
