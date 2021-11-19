import React from 'react';

import ContactUs from './contact-us';
import Team from './team';
import AboutUs from './about-us';
import Header from './Header.jsx';

import './a-propos.css';

function Apropos() {
  return (
    <>
      <Header />
      <div className="PageScreen">
        <div className="TextBox"> About US </div>
        <AboutUs />
        <Team />
        <ContactUs />
      </div>
    </>
  );
}

export default Apropos;
