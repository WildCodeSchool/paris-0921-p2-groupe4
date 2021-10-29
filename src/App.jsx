import React, { useState } from 'react';
import './App.css';
import RequestHappy from './components/happyAPI';
import axios from 'axios';

function App() {
  let keys = {
    Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAHhbUwEAAAAAM%2FgnlbpALu79%2BmS9uRXumAOCx3g%3DbIhcYicrZXKJBwYwiSE3GlCuRfmqgeKxk4N2KYEMoLhK4AmzJL',
  };
  const [tweet, setTweet] = useState(null);

  const getTweet = () => {
    axios
      .get(
        'https://api.twitter.com/2/tweets/search/recent?max_results=10&tweet.fields=lang,attachments,text&expansions=attachments.media_keys,author_id&media.fields=preview_image_url,url,media_key&user.fields=username,name&query=@goodnewsnetwork%20has%3Aimages%20lang%3Aen',
        { headers: keys },
      )
      .then((response) => response.data)
      .then((data) => {
        setTweet(data);
      });
  };

  return (
    <div className="tweet-result">
      <RequestHappy tweets={tweet} />
      <button onClick={getTweet}>COUCOU</button>
    </div>
  );
}

export default App;
