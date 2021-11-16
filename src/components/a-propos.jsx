import React from 'react';
import './a-propos.css';
import Team from './team.jsx';
import Preferences from './preferences';
import AboutUs from './about-us';
import Accordion from './Accordion.jsx';
import ContactUs from './contact-us';

function Apropos() {
  return (
    <div>
      <div>
        <h2 className="title">About US</h2>
      </div>
      <Team />
      <AboutUs />
      <Accordion />
      <Preferences />
      <ContactUs />
    </div>
  );
}

export default Apropos;
