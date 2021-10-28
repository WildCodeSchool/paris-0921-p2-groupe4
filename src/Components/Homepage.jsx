import React from 'react';
import Happy from '../Pictures/Happy-news.jpg';
import National from '../Pictures/Monkey-2.jpg';
import Tendances from '../Pictures/Tendances.jpg';
import TED from '../Pictures/TED.jpg';
import './Pictures.css';
import './Text.css';

export default function Pictures() {
  return (
    <>
      <div className="WelcomeText">
        <p> Welcome to your relaxation App.Choose below what you want to see </p>
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
            <a href="/TED">
              <img className="TED" src={TED} alt="TED" height="170px"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
