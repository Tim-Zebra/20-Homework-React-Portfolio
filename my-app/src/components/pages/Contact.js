// Header "Contact"
// Form:
// Name:
// Email:
// Message:
// Submit (Validate, all fields must be filled in. Validate Email.)
// If validation fails, show short message why above submit button
// Contact form inspired by Aleksandr Varnin https://mailtrap.io/blog/react-contact-form/
import React from 'react';

export default function Contact() {
// Validate email is entered correctly
  const validateEmail = (email) => {

  }

  const validateName = (name) => {

  }

  return (
    <section className="portfolioSection" id="contactSection">
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
}