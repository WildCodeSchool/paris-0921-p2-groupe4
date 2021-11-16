import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FluxA from './fluxActualite';
import keys from './keys';

function TweetRequest(props) {
  const [tenTweets, setTenTweets] = useState([]);
  let { tweetNumber, theme, images } = props;

  useEffect(() => {
    axios
      .get(
        `https://cors-bypass.tkzprod.dev/api.twitter.com/2/tweets/search/recent?max_results=${tweetNumber}&tweet.fields=lang,attachments,text,geo&expansions=attachments.media_keys,author_id,geo.place_id&media.fields=preview_image_url,url,media_key&place.fields=country,geo&user.fields=username,name&query=from%3A${theme}${images}`,
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
  }, [theme, tweetNumber, images]);

  return (
    <>
      {tenTweets.length &&
        tenTweets.map((tweet) => {
          return <FluxA key={tweet.id} twitterImg={tweet.url} twitterText={tweet.text} twitterAuthor={tweet.user} />;
        })}
    </>
  );
}

export default TweetRequest;
