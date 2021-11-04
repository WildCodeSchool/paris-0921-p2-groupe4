import React from 'react';

import Happy from '../pictures/Happy-news.jpg';
import National from '../pictures/Monkey-2.jpg';
import Tendances from '../pictures/Tendances.jpg';
import TED from '../pictures/TED.jpg';

import './Pictures.css';
import './Text.css';
import './Homepage.css';

export default function Pictures() {
  return (
    <>
      <div className="Body">
        {
          <div className="WelcomeText">
            <p> Welcome to Nasato. Your relaxation App. You can choose below what you want to see </p>
          </div>
        }{' '}
        <div className="Container-pictures">
          <div className="ContainerOne">
            <div className="Pictures">
              <a href="/Happynews">
                <img className="Happy" src={Happy} alt="Happy-news"></img>
              </a>
            </div>
            <div className="Pictures">
              <a href="/National">
                <img className="National" src={National} alt="National-geographic"></img>
              </a>
            </div>
          </div>
          <div className="ContainerTwo">
            <div className="Pictures">
              <a href="/Tendances">
                <img className="Tendances" src={Tendances} alt="Tendances"></img>
              </a>
            </div>
            <div className="Pictures">
              <a href="/TedTalks">
                <img className="TED" src={TED} alt="TED"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
