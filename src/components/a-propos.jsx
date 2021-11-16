import React from 'react';
import './a-propos.css';
import ContactUs from './contact-us';
import Team from './team.js';
import Preferences from './preferences';
import AboutUs from './about-us';

function Apropos() {
  return (
    <div>
      <div>
        <h2 className="title">About US</h2>
      </div>
      <AboutUs />
      <Team />
      <Preferences />
      <ContactUs />
    </div>
  );
}

export default Apropos;
