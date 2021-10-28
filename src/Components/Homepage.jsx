import React from 'react';
import { Link } from 'react-router-dom';
import Happy from '../Pictures/Happy-news.jpg';
import National from '../Pictures/Monkey-2.jpg';
import Tendances from '../Pictures/Tendances.jpg';
import TED from '../Pictures/TED.jpg';
import './Pictures.css';
import './Text.css';

export default function Pictures() {
  return (
    <div className="Container-pictures">
      <div>
        <div className="WelcomeText">
          <p> Welcome to your relaxation App. Choose below what you want to see </p>
        </div>
      </div>
      <div className="Pictures">
        <img className="Happy" src={Happy} alt="Happy-news" height="150px"></img>
        <ul>
          <li>
            {' '}
            <Link to="/HappyNews"> Happy News </Link>{' '}
          </li>
        </ul>
      </div>
      <div className="Pictures">
        <img className="National" src={National} alt="National-geographic" height="170px"></img>
        <ul>
          <li>
            {' '}
            <Link to="/National"> National Geographic </Link>{' '}
          </li>
        </ul>
      </div>
      <div className="Pictures">
        <img className="Tendances" src={Tendances} alt="Tendances" height="170px"></img>
        <ul>
          <li>
            {' '}
            <Link to="/Tendances"> Tendances </Link>{' '}
          </li>
        </ul>
      </div>
      <div className="Pictures">
        <img className="TED" src={TED} alt="TED" height="170px"></img>
        <ul>
          <li>
            {' '}
            <Link to="/TedTalks"> TED Talks </Link>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
}
