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
  // Creates a style for an alert message
  const alertStyle = {

  }

  // Variables for validating content
  const [ isEmail, setIsEmail ] = useState(false);
  const [ isUserName, setIsUsername ] = useState(false);
  const [ isMessage, setIsMessage ] = useState(false);

  // Variables for input content present
  const [ emailInput, setemailInput ] = useState('');
  const [ usernameInput, setusernameInput ] = useState('');
  const [ messageInput, setmessageInput ] = useState('');

  const 

  // Handle Mouse Over
  const handleMouseOver = () => {
    const alert = " Please fill in the below form field!"

  }

  // Handle form submit
  // Makes sure email is in the proper format
  const validateEmail = (email) => {
    // Regex to confirm email format
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

    // confirms match

  }

  // Makes sure content is entered
  const validateContent = (content) => {
    return content !== null || undefined ? true:false;
  }

  const validate = () => {

    // Resets fields if valid info
    if(isUsername && isEmail && isMessage) {
      setIsUsername(false);
      isEmail(false);
      isMessage(false);
    }
    return 
  }

  return (
    <section className="portfolioSection p-5 mx-auto" id="contactSection">
      <h1 className='text-center'>Contact Me @</h1>
      <div className="d-flex justify-content-center App">
        <form id="contact-form" >
          <div className="form-group"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <label htmlFor="name">Name
            <span></span>
            </label>
            <input type="text" className="form-control">

            </input>
          </div>
          <div className="form-group"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="text" className="form-control">

            </input>
          </div>
          <div className="form-group"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5">
            
            </textarea>
          </div>
          <button type="submit" className="btn" onClick={validate}>Submit</button>
        </form>
      </div>
    </section>
  );
}