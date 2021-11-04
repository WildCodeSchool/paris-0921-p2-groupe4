import React, { useState } from 'react';
import axios from 'axios';
import './contentBox.css';
import keys from './keys.jsx';
import MultipleTweets from './multipleTweetDisplay';

function Content() {
  const [tweet, setTweet] = useState(null);
  const getTweet = () => {
    axios
      .get(
        'https://cors-bypass.tkzprod.dev/api.twitter.com/2/tweets/search/recent?max_results=10&tweet.fields=lang,attachments,text&expansions=attachments.media_keys,author_id&media.fields=preview_image_url,url,media_key&user.fields=username,name&query=@goodnewsnetwork%20has%3Aimages%20lang%3Aen',
        { headers: keys },
      )
      .then((response) => response.data)
      .then((data) => setTweet(data));
  };

  return (
    <div className="tweet-result">
      <button onClick={getTweet}>COUCOU</button>
      <MultipleTweets tenTweets={tweet} />
    </div>
  );
}

export default Content;
