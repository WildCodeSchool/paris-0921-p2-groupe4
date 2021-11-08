import React, { useState, useEffect } from 'react';
import axios from 'axios';

import keys from './keys';

function TweetRequest(tweetNumber, theme) {
  const [tenTweets, setTenTweets] = useState([]);
  theme = '@NatGeo';
  tweetNumber = '10';

  useEffect(() => {
    axios
      .get(
        `https://cors-bypass.tkzprod.dev/api.twitter.com/2/tweets/search/recent?max_results=${tweetNumber}&tweet.fields=lang,attachments,text&expansions=attachments.media_keys,author_id&media.fields=preview_image_url,url,media_key&user.fields=username,name&query=${theme}%20has%3Aimages%20lang%3Aen`,
        { headers: keys },
      )
      .then((response) => response.data)
      .then((data) => {
        const tweets = data.data.map((tweet) => {
          return {
            id: tweet.id,
            text: tweet.text,
            url: tweet.attachments ? data.includes.media.find((elem) => elem.media_key === tweet.attachments.media_keys[0]).url : null,
            user: data.includes.users.find((elem) => elem.id === tweet.author_id).name,
          };
        });
        setTenTweets(tweets);
      });
  }, []);

  return (
    <>
      {tenTweets.length &&
        tenTweets.map((tweet) => {
          return (
            <div key={tweet.id}>
              <img src={tweet.url} alt="twitterimg" />
              <p>{tweet.text}</p>
              <p> Written by {tweet.user}</p>
            </div>
          );
        })}
    </>
  );
}

export default TweetRequest;
