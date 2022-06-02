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
  const [ isUsername, setIsUsername ] = useState(false);
  const [ isEmail, setIsEmail ] = useState(false);
  const [ isMessage, setIsMessage ] = useState(false);

  // Variables for input content present  
  const [ usernameInput, setUsernameInput ] = useState('');
  const [ emailInput, setEmailInput ] = useState('');
  const [ messageInput, setMessageInput ] = useState('');
  const [ isUsernameAlertShown, setIsUsernameAlertShown ] = useState(false);
  const [ isEmailAlertShown, setIsEmailAlertShown ] = useState(false);
  const [ isMessageAlertShown, setIsMessageAlertShown ] = useState(false);
  const [ isEmailValid, setIsEmailValid ] = useState(true);
  // Handle Mouse Over
  const handleMouseOverUser = (content) => {
    return content === ('') ? true:false;
  }

  const handleMouseOverEmail = (content) => {
    return content === ('') ? true:false;
  }

  const handleMouseOverMessage = (content) => {
    return content === ('') ? true:false;
  }

  // Handle form submit
  // Makes sure email is in the proper format
  const validateEmail = (email) => {
    // Regex to confirm email format
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

    // confirms match
      return email.match(validEmail);
  }

  const validate = () => {

    // Resets fields if valid info
    if(isUsername && isEmail && isMessage && !isUsernameAlertShown && !isEmailAlertShown && !isMessageAlertShown) {
      setUsernameInput('');
      setEmailInput('');
      setMessageInput('');
      setIsUsername(false);
      setIsEmail(false);
      setIsMessage(false);
      setIsUsernameAlertShown(false);
      setIsEmailAlertShown(false);
      setIsMessageAlertShown(false);
      return;
    }

  }

  return (
    <section className="portfolioSection p-5 mx-auto" id="contactSection">
      <h1 className='text-center'>Contact Me @</h1>
      <div className="d-flex justify-content-center App">
        <form id="contact-form" >
          <div className="form-group"
            onMouseLeave={() => setIsUsernameAlertShown(handleMouseOverUser(usernameInput))}>
            <label htmlFor="name">Name</label>
            { isUsernameAlertShown &&
              <span style={alertStyle}>Please fill in the below form field!</span>
            }
            <input type="text" className="form-control"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            >
            </input>
          </div>
          <div className="form-group"
            onMouseLeave={() => {setIsEmailAlertShown(handleMouseOverEmail(emailInput)); setIsEmailValid(validateEmail(emailInput));}}>
            <label htmlFor="exampleInputEmail1">Email address</label>
            { isEmailAlertShown &&
                <span style={alertStyle}>Please fill in the below form field!</span>
            }
            { !isEmailAlertShown && !isEmailValid &&
                <span style={alertStyle}>Invalid EMAIL!</span>
            }
            <input type="text" className="form-control"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            >
            </input>
          </div>
          <div className="form-group"
            onMouseLeave={() => setIsMessageAlertShown(handleMouseOverMessage(messageInput))}>
            <label htmlFor="message">Message</label>
            {isMessageAlertShown &&
                <span style={alertStyle}>Please fill in the below form field!</span>
            }
            <textarea className="form-control" rows="5"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            >
            </textarea>
          </div>
          <button type="submit" className="btn" id="contactSubmitBtn" onClick={validate}>Submit</button>
        </form>
      </div>
    </section>
  );
}