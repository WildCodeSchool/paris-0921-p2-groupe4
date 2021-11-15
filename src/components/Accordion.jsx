import React, { useState, useEffect, useRef } from 'react';
import './Accordion.css';
import Chevron from '../pictures/chevron.png';

export default function Accordion() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  //////////////      2       ////////////////////
  const [toggle2, setToggle2] = useState(false);
  const [heightEl2, setHeightEl2] = useState();

  const refHeight2 = useRef();

  useEffect(() => {
    setHeightEl2(`${refHeight2.current.scrollHeight}px`);
  }, []);

  const toggleState2 = () => {
    setToggle2(!toggle2);
  };

  return (
    <>
      <div className="accordion">
        <button onClick={toggleState} className="accordion-visible">
          <span>Preferences</span>
          <img className={toggle && 'active'} alt="chevron" src={Chevron} />
        </button>

        <div className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'} style={{ height: toggle ? `${heightEl}` : '0px' }} ref={refHeight}>
          <p aria-hidden={toggle ? 'true' : 'false'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
        </div>
      </div>

      {/* second Accordion */}

      <div className="accordion">
        <button onClick={toggleState2} className="accordion-visible">
          <span>Contactez-nous</span>
          <img className={toggle2 && 'active'} alt="chevron" src={Chevron} />
        </button>

        <div
          className={toggle2 ? 'accordion-toggle animated' : 'accordion-toggle'}
          style={{ height: toggle2 ? `${heightEl2}` : '0px' }}
          ref={refHeight2}
        >
          <p aria-hidden={toggle2 ? 'true' : 'false'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
        </div>
      </div>
    </>
  );
}
