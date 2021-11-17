import React from 'react';

import './FluxActualite.css';

function FluxA({ twitterImg, twitterText, twitterAuthor }) {
  const [theButton, setButton] = React.useState(false);

  function handleClickButton() {
    setButton(!theButton);
  }

  return (
    <div className="fluxbox" onClick={handleClickButton} onKeyPress={handleClickButton} role="button" tabIndex={0}>
      <div className="flux">
        <div className={theButton ? 'displayImg' : 'noDisplayImg'}>
          <img src={twitterImg} alt="happynews" className="displayImg"></img>
        </div>
        <div className="rightColumnDisplay">
          <div className={theButton ? 'text' : 'lesstext'}>
            {twitterText}
            <p> Written by {twitterAuthor} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FluxA;
