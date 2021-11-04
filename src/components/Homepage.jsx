import React from 'react';
import Happy from '../pictures/Happynews.png';
import National from '../pictures/National.png';
import Tendances from '../pictures/Tendances.png';
import TED from '../pictures/TED.png';
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
