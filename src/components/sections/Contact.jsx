import React from 'react';

const Contact = () => {
  return (
    <section className='row contact'>
      <h2>Contact</h2>
      <div>
        <span className='separator'>*</span>
        <span className='sub'>Feel free to reach out using the form below.</span>
        <form>
          <ul>
            <li>
              <label for='name'>Name:</label>
              <input type='text' id='name' name='name' />
            </li>
            <li>
              <label for='email'>Email:</label>
              <input type='email' id='email' name='email' />
            </li>
            <li>
              <label for='messgae'>Message:</label>
              <textarea id='message' name='message' />
            </li>
          </ul>
          <button>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
