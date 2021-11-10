import React from 'react';
import './contact-us.css';

function ContactUs() {
  const [theForm, setTheForm] = React.useState(false);

  function handleClickForm() {
    setTheForm(!theForm);
  }
  return (
    <div>
      <div className="contactus">
        <h3>Contact Us</h3>
        <button onClick={handleClickForm} className="contactbutton">
          &#8595;
        </button>
      </div>
      <div className={theForm ? 'form' : 'notform'}>
        <form id="contact-form">
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
          <div className="button">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
