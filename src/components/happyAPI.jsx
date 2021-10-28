import React from 'react';

function RequestHappy({ tweets }) {
  return (
    tweets && (
      <div>
        <img src={tweets.includes.media.url} alt={tweets.data.text}></img>
        <ul>
          <li>{tweets.includes.users.name}</li>
          <li>{tweets.data.text}</li>
        </ul>
      </div>
    )
  );
}

export default RequestHappy;
