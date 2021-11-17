/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './Modal.css';
import verifieIcon from '../pictures/verifie.png';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        ENVOYER
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="close-content">
              <button className="close-modal" onClick={toggleModal}>
                FERMER
              </button>
            </div>
            <div className="message-content">
              <img src={verifieIcon} height="25px" width="25px" alt="verif" />
              <p>Mail envoyé</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
