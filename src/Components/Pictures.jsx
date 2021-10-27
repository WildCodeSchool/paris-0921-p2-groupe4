import React from 'react';
import Happy from '../Pictures/Happy-news.jpg';
import National from '../Pictures/Monkey-2.jpg';
import Tendances from '../Pictures/Tendances.jpg';
import TED from '../Pictures/TED.jpg';
import './Pictures.css';

export default function Pictures() {
  return (
    <div className="Container-pictures">
      <div className="Pictures">
        <img className="Happy" src={Happy} alt="Happy-news" height="150px"></img>
      </div>
      <div className="Pictures">
        <img className="National" src={National} alt="National-geographic" height="170px"></img>
      </div>
      <div className="Pictures">
        <img className="Tendances" src={Tendances} alt="Tendances" height="170px"></img>
      </div>
      <div className="Pictures">
        <img className="TED" src={TED} alt="TED" height="170px"></img>
      </div>
    </div>
  );
}
