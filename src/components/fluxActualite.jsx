import React from 'react';

import './fluxActualite.css';

function FluxA({ twitterImg, twitterText, twitterAuthor }) {
  const [theButton, setButton] = React.useState(false);

  function handleClickButton() {
    setButton(!theButton);
  }

  return (
    <div className="fluxbox">
      <div className="flux">
        <div className={theButton ? 'displayImg' : 'noDisplayImg'}>
          <img src={twitterImg} alt="happynews" className="displayImg"></img>
        </div>
        <div className="rightColumnDisplay">
          <div className={theButton ? 'text' : 'lesstext'}>
            {twitterText}
            <p> Written by {twitterAuthor} </p>
          </div>
          <button className="fluxbutton" onClick={handleClickButton}>
            {' '}
            &darr; &uarr;{' '}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FluxA;
