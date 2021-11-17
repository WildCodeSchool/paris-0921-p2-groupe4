import React, { useEffect, useRef } from 'react';
import './Loader.css';
import logo from '../pictures/logo.png';
import { Power2 } from 'gsap';

function Loader({ timeline }) {
  let welcome = useRef(null);
  let to = useRef(null);
  let nasato = useRef(null);

  useEffect(() => {
    timeline.from(welcome, {
      scale: 5,
      duration: 0.6,
      opacity: 0,
      y: 100,
      ease: Power2.easeOut,
    });
  });
  useEffect(() => {
    timeline.from(to, {
      scale: 5,
      duration: 0.6,
      opacity: 0,
      y: 100,
      ease: Power2.easeOut,
    });
  });
  useEffect(() => {
    timeline.from(nasato, {
      scale: 5,
      duration: 0.6,
      opacity: 0,
      y: 100,
      ease: Power2.easeOut,
    });
  });

  return (
    <main>
      <div className="container">
        <div className="cube">
          <div className="face front">
            <img src={logo} alt="logo" />
          </div>
          <div className="face back">
            <img src={logo} alt="logo" />
          </div>
          <div className="face right">
            <img src={logo} alt="logo" />
          </div>
          <div className="face left">
            <img src={logo} alt="logo" />
          </div>
          <div className="face top">
            <img src={logo} alt="logo" />
          </div>
          <div className="face bottom">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="sentence">
        <div className="container-span1">
          <span ref={(el) => (welcome = el)} className="welcome">
            Welcome
          </span>
          <span ref={(el) => (to = el)} className="to">
            to
          </span>
          <span ref={(el) => (nasato = el)} className="nasato">
            NASATO
          </span>
        </div>
      </div>
    </main>
  );
}

export default Loader;
