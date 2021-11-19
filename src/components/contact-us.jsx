import React, { useState, useRef } from 'react';

import './contact-us.css';
import Modal from './Modal';
import emailjs from 'emailjs-com';

function ContactUs() {
  const [theForm, setTheForm] = useState(false);

  function handleClickForm() {
    setTheForm(!theForm);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5qz83vl', 'template_g3atcas', e.target, 'user_guJnEbcn9vb4gvxp42Rw9').then(
      (result) => {
        return result.text;
      },
      (error) => {
        return error.text;
      },
    );
  };

  return (
    <div>
      <div className="contactus">
        <h3>Contact Us</h3>
        <button onClick={handleClickForm} className="contactbutton">
          &#8595;
        </button>
      </div>
      <div className={theForm ? 'form' : 'notform'}>
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
          <Modal />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
