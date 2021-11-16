import React from 'react';

import './FluxActualite.css';

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
          <button className="favouriteBtn">Add fav</button>
        </div>
      </div>
    </div>
  );
}

export default FluxA;
