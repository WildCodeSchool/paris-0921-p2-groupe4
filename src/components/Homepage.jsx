import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import Loader from './Loader';
import Header from './Header.jsx';

import Happy from '../pictures/Happynews.png';
import National from '../pictures/National.png';
import Tendances from '../pictures/Tendances.png';
import TED from '../pictures/TED.png';

import './Text.css';
import './Homepage.css';

function Pictures() {
  let timeline = gsap.timeline();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return loader ? (
    <Loader timeline={timeline} />
  ) : (
    <>
      <Header />
      <div className="Body">
        <div className="PageScreenHome">
          <div className="TextBox">
            <div className="WelcomeText">
              <p> Welcome to Nasato. Your relaxation App. You can choose below what you want to see </p>
            </div>
          </div>
          <div className="Container-pictures">
            <div className="ContainerOne">
              <div className="Pictures">
                <Link to="/Happynews" className="Color" style={{ textDecoration: 'none' }}>
                  <img className="Happy" src={Happy} alt="Happy-news"></img>
                  <p> Happy News </p>
                </Link>
              </div>
              <div className="Pictures">
                <Link to="/National" className="Color" style={{ textDecoration: 'none' }}>
                  <img className="National" src={National} alt="National-geographic"></img>
                  <p> Nature </p>
                </Link>
              </div>
            </div>
            <div className="ContainerTwo">
              <div className="Pictures">
                <Link to="/Tendances" className="Color" style={{ textDecoration: 'none' }}>
                  <img className="Tendances" src={Tendances} alt="Tendances"></img>
                  <p> Trending </p>
                </Link>
              </div>
              <div className="Pictures">
                <Link to="/TedTalks" className="Color" style={{ textDecoration: 'none' }}>
                  <img className="TED" src={TED} alt="TED"></img>
                  <p> Get inspired! </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pictures;
