import React from 'react';

import ContactUs from './contact-us';
import Team from './team';
import Preferences from './preferences';
import AboutUs from './about-us';

import './a-propos.css';
import Header from './Header.jsx';

function Apropos() {
  return (
    <>
      <Header />
      <div>
        <div>
          <h2 className="title">About US</h2>
        </div>
        <AboutUs />
        <Team />
        <Preferences />
        <ContactUs />
      </div>
    </>
  );
}

export default Apropos;
