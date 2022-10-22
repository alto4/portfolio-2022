import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage('');
      }, 10000);
    }
  }, [successMessage]);

  const validate = () => {
    let valid = true;

    setErrors({});

    if (!name) {
      setErrors({ ...errors, name: 'Name is a required field.' });
      valid = false;
    }

    if (!email) {
      setErrors({ ...errors, email: 'Email is a required field.' });
      valid = false;
    }

    if (!message) {
      setErrors({ ...errors, message: 'Please include a message.' });
      valid = false;
    }

    setShowErrors(true);

    return valid;
  };

  const clear = () => {
    setErrors({});
    setName('');
    setEmail('');
    setMessage('');
  };

  const onSubmit = async () => {
    let validFormData = validate();
    if (validFormData) {
      setSubmitting(true);
      await axios.post('https://portfolio-api-ss1a.onrender.com/contact', {
        name: name,
        email: email,
        message: message,
      });
      clear();
      setSuccessMessage('Thank you for the inquiry. I will get back to you ASAP.');
      setSubmitting(false);
    }
  };

  return (
    <section className='row contact' id='contact'>
      <h2>Contact</h2>
      <div>
        <span className='separator'>*</span>
        <span className='sub'>Feel free to reach out using the form below.</span>
        <form>
          <ul>
            <li>
              <label for='name'>Name:</label>
              {errors.name && showErrors && <p>Please include your name.</p>}
              <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} value={name} />
            </li>
            <li>
              <label for='email'>Email:</label>
              {errors.email && showErrors && <p>Please include a valid email.</p>}

              <input type='email' id='email' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </li>
            <li>
              <label for='messgae'>Message:</label>
              {errors.message && showErrors && <p>Please include a message.</p>}
              <textarea id='message' name='message' onChange={(e) => setMessage(e.target.value)} value={message} />
            </li>
          </ul>
          <button
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            disabled={submitting}
            style={{ cursor: 'pointer', pointerEvents: submitting ? 'none' : 'inherit' }}
          >
            {submitting ? 'Submitting' : 'Send'}
          </button>
          {successMessage && <p className='success-message'>{successMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
