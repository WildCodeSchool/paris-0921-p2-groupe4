import React from 'react';

import './display-video.css';

function DisplayVideo({ videoId }) {
  return (
    videoId && (
      <div className="frame">
        <div className="displayVideo">
          <iframe
            width="100%"
            height="480"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    )
  );
}

export default DisplayVideo;
