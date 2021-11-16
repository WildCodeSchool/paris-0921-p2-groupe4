import React from 'react';

import './themeButton.css';

function NumberButton({ addTenMoreTweets }) {
  return (
    <div>
      <button className="submitThemeButton" onClick={addTenMoreTweets}>
        Add More!
      </button>
    </div>
  );
}

export default NumberButton;
