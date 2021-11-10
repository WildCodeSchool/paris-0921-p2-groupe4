import React from 'react';

import Happy from '../pictures/Happy-news.jpg';
import './fluxActualite.css';

function FluxA() {
  const [theButton, setButton] = React.useState(false);

  function handleClickButton() {
    setButton(!theButton);
  }

  return (
    <div className="fluxbox">
      <div className="flux">
        <div className={theButton ? 'displayImg' : 'noDisplayImg'}>
          <img src={Happy} alt="happynews" className="displayImg"></img>
        </div>
        <div className={theButton ? 'text' : 'lesstext'}>
          <p>
            Les insectes (Insecta) sont une classe animaux invertébrés de embranchement des arthropodes et du sous-embranchement des hexapodes. Ils
            caractérisés par un corps segmenté en trois tagmes (tête possédant des pièces buccales externes, une paire de antennes et au moins paire
            yeux composés ; thorax pourvu de trois paires de pattes.
          </p>
        </div>
        <div>
          <button className="fluxbutton" onClick={handleClickButton}>
            &darr; &uarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default FluxA;
