import React from 'react';

function RequestHappy({ tweets }) {
  return (
    tweets && (
      <div>
        <img src={tweets.includes.media[0].url} alt={tweets.data[0].text}></img>
        <ul>
          <li>{tweets.includes.users[0].name}</li>
          <li>{tweets.data[0].text}</li>
        </ul>
      </div>
    )
  );
}

export default RequestHappy;
