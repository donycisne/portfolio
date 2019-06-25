import React from 'react';

import ContactForm from './ContactForm';
import Form from '../Icons/Form';
import Chat from '../Icons/Chat';
import Envelope from '../Icons/Envelope';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Get in touch</h1>
          <div className="contact-description">
            <p>
              If you're looking for a passionate developer with interest on
              learning new ways and techniques to be better with the code or
              you'd like to chat about something feel free to reach out.
            </p>
            <p>
              To get in touch, fill out the contact form or email me at{' '}
              <a href="mailto:dony.cisne@gmail.com" rel="noopener noreferrer">
                dony.cisne@gmail.com
              </a>
            </p>
            <p>
              For more information or to follow my work, you can also find me on{' '}
              <a
                href="https://codesandbox.io/u/donycisneros/sandboxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeSandbox
              </a>
              ,{' '}
              <a
                href="https://www.linkedin.com/in/donycisneros"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              ,{' '}
              <a
                href="https://github.com/donycisneros"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              , and{' '}
              <a
                href="https://twitter.com/donycisne"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              .
            </p>
          </div>
          <div className="contact-icons" id="contact-icons">
            <Form />
            <Envelope />
            <Chat />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
