import React, { useState, useEffect } from 'react';
import axios from 'axios';

import keys from './keys';

function TweetRequest() {
  const [tenTweets, setTenTweets] = useState([]);
  const tweetArray = [];

  useEffect(() => {
    axios
      .get(
        'https://cors-bypass.tkzprod.dev/api.twitter.com/2/tweets/search/recent?max_results=10&tweet.fields=lang,attachments,text&expansions=attachments.media_keys,author_id&media.fields=preview_image_url,url,media_key&user.fields=username,name&query=@goodnewsnetwork%20has%3Aimages%20lang%3Aen',
        { headers: keys },
      )
      .then((response) => response.data)
      .then((data) => {
        data &&
          data.data.map((tweet) => {
            let url = null;
            const user = data.includes.users.map((author) => {
              author.name;
            });

            if (tweet.attachments) {
              url = data.includes.media.find((media) => {
                media.media_key === tweet.attachments.media_keys[0];
              });
            }

            tweetArray.push({
              id: tweet.id,
              text: tweet.text,
              url: url,
              user: user,
            });
          });
      });

    setTenTweets(tweetArray);
  }, []);

  return <div>{tenTweets}</div>;
}

export default TweetRequest;
