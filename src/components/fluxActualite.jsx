import React, { useEffect, useState } from 'react';

import Logo from '../pictures/logo.png';

import './fluxActualite.css';

function FluxA({ twitterImg, twitterText, twitterAuthor }) {
  const [theButton, setButton] = useState(false);
  const [imageDisplay, setImageDisplay] = useState(twitterImg);

  useEffect(() => {
    if (theButton && !twitterImg) {
      setImageDisplay(Logo);
    }
  }, [theButton]);

  function handleClickButton() {
    setButton(!theButton);
  }

  return (
    <div className="fluxbox" onClick={handleClickButton} onKeyPress={handleClickButton} role="button" tabIndex={0}>
      <div className="flux">
        <div className={theButton ? 'displayImg' : 'noDisplayImg'}>
          <img src={imageDisplay} alt="happynews" className="imageSet"></img>
        </div>
        <div className={theButton ? 'text' : 'lesstext'}>
          {twitterText}
          <p> Written by {twitterAuthor} </p>
        </div>
      </div>
    </div>
  );
}

export default FluxA;
