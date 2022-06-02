// Header "Contact"
// Form:
// Name:
// Email:
// Message:
// Submit (Validate, all fields must be filled in. Validate Email.)
// If validation fails, show short message why above submit button
// Contact form inspired by Aleksandr Varnin https://mailtrap.io/blog/react-contact-form/
import React, {useState} from 'react';

export default function Contact() {
// Allows for active changing of variables
const [ isEmail, setIsEmail ] = useState(false);
const [ isUserName, setIsUsername ] = useState(false);
const [ isMessage, setIsMessage ] = useState(false);

// Makes sure email is in the proper format
const validateEmail = (email) => {
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
   );
  }

  // Makes sure email is entered
  const validateUsername = (user) => {

  }

  const validateUsername = (name) => {

  }



  return (
    <section className="portfolioSection p-5 mx-auto" id="contactSection">
      <h1 className='text-center'>Contact Me @</h1>
      <div className="d-flex justify-content-center App">
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" />
          </div>
          <button type="submit" className="btn" onClick={validate}>Submit</button>
        </form>
      </div>
    </section>
  );
}