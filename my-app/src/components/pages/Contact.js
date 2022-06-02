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
    color: 'red',
    textDecorationLine: 'underline',
    display: 'block',
  }

  // Variables for validating content
  const [ isEmail, setIsEmail ] = useState(false);
  const [ isUsername, setIsUsername ] = useState(false);
  const [ isMessage, setIsMessage ] = useState(false);

  // Variables for input content present
  const [ emailInput, setEmailInput ] = useState('');
  const [ usernameInput, setUsernameInput ] = useState('');
  const [ messageInput, setMessageInput ] = useState('');
  const [ isEmailAlertShown, setIsEmailAlertShown ] = useState(true);
  const [ isUsernameAlertShown, setIsUsernameAlertShown ] = useState(true);
  const [ isMessageAlertShown, setIsMessageAlertShown ] = useState(true);

  // Handle Mouse Over
  const handleMouseOver = (content) => {
    
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
    return content !== null || content !== undefined ? true:false;
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
            onMouseLeave={() => handleMouseOver(usernameInput)}>
            <label htmlFor="name"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}>Name
            </label>
            { isUsernameAlertShown &&
              <span style={alertStyle}>Please fill in the below form field!</span>
            }
            <input type="text" className="form-control">

            </input>
          </div>
          <div className="form-group"
            onMouseLeave={() => handleMouseOver(emailInput)}>
            <label htmlFor="exampleInputEmail1">Email address 
              { isEmailAlertShown &&
                  <span style={alertStyle}>Please fill in the below form field!</span>
              }
            </label>
            <input type="text" className="form-control"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            >
            </input>
          </div>
          <div className="form-group"
            onMouseLeave={() => handleMouseOver(messageInput)}>
            <label htmlFor="message">Message 
              {isMessageAlertShown &&
                <span style={alertStyle}>Please fill in the below form field!</span>
              }
            </label>
            <textarea className="form-control" rows="5"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            >
            
            </textarea>
          </div>
          <button type="submit" className="btn" onClick={validate}>Submit</button>
        </form>
      </div>
    </section>
  );
}