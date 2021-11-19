import React, { useState } from 'react';

import verifieIcon from '../pictures/verifie.png';

import './Modal.css';

function Modal() {
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
        SUBMIT
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="close-content">
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
            <div className="message-content">
              <img src={verifieIcon} height="25px" width="25px" alt="verif" />
              <p>Mail sent!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
