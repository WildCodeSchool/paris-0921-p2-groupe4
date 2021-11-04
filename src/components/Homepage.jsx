import React from 'react';

import Happy from '../pictures/Happy-news.jpg';
import National from '../pictures/Monkey-2.jpg';
import Tendances from '../pictures/Tendances.jpg';
import TED from '../pictures/TED.jpg';

import './Pictures.css';
import './Text.css';

export default function Pictures() {
  return (
    <div>
      <div className="WelcomeText">
        <p> Welcome to your relaxation App. Choose below what you want to see </p>
      </div>
      <div className="Container-pictures">
        <div className="ContainerOne">
          <div className="Pictures">
            <a href="/Happynews">
              <img className="Happy" src={Happy} alt="Happy-news" height="150px"></img>
            </a>
          </div>
          <div className="Pictures">
            <a href="/National">
              <img className="National" src={National} alt="National-geographic" height="170px"></img>
            </a>
          </div>
        </div>
        <div className="ContainerTwo">
          <div className="Pictures">
            <a href="/Tendances">
              <img className="Tendances" src={Tendances} alt="Tendances" height="170px"></img>
            </a>
          </div>
          <div className="Pictures">
            <a href="/TedTalks">
              <img className="TED" src={TED} alt="TED" height="170px"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
