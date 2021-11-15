/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Formulaire.css';
import Modal from './Modal';

export function Formulaire() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oyf7erj', 'template_1eka4tf', e.target, 'user_6HHvA7VpHruLNDXidJgaG').then(
      (result) => {
        return result.text;
      },
      (error) => {
        return error.text;
      },
    );
  };

  return (
    <main className="main-contact">
      <div className="contact">
        <p>Contactez-nous !</p>
      </div>
      <form className="form-container" ref={form} onSubmit={sendEmail}>
        <div className="content-form1">
          <label>Name :</label>
          <input type="text" name="user_name" />
        </div>
        <div className="content-form2">
          <label>Email :</label>
          <input type="email" name="user_email" />
        </div>
        <div className="content-form3">
          <label>Message :</label>
          <textarea name="message" />
          <Modal />
        </div>
      </form>
    </main>
  );
}

export default Formulaire;
