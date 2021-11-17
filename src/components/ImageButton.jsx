import React from 'react';

import './themeButton.css';

function ImageButton({ handleTweetImages }) {
  return (
    <div className="ImageButton">
      <button className="submitThemeButton" onClick={handleTweetImages}>
        With images
      </button>
    </div>
  );
}
export default ImageButton;
