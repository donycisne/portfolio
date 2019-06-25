import React, { useState, useRef } from 'react';
import { TweenMax } from 'gsap';
import axios from 'axios';

import Paper from '../Icons/Paper';
import Star from '../Icons/Star';

const ContactForm = () => {
  const [disabled, setDisabled] = useState(false);

  const [mail, setMail] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = mail;

  const handleChange = e => {
    setMail({
      ...mail,
      [e.target.name]: e.target.value,
    });
  };

  // Form
  let nameRef = useRef(null);
  let mailRef = useRef(null);
  let messageRef = useRef(null);
  let nameLabelRef = useRef(null);
  let mailLabelRef = useRef(null);
  let messageLabelRef = useRef(null);
  let submitRef = useRef(null);

  // Form Back
  let formBackRef = useRef(null);
  let paperRef = useRef(null);
  let starLeftRef = useRef(null);
  let starRightRef = useRef(null);
  let formTextRef = useRef(null);
  let formResetRef = useRef(null);

  const sendMail = e => {
    e.preventDefault();
    setDisabled(!disabled);

    const url = 'https://dony-portfolio-server.herokuapp.com/send-mail?';

    axios
      .post(`${url}name=${name}&email=${email}&message=${message}`)
      .catch(err => console.error('Error fetching and parsing the data', err));

    TweenMax.to(nameRef, 0.5, { scaleY: 0 });
    TweenMax.to(mailRef, 0.5, { scaleY: 0 });
    TweenMax.to(messageRef, 0.5, { scaleY: 0 });
    TweenMax.to(nameLabelRef, 0.5, { scaleY: 0 });
    TweenMax.to(mailLabelRef, 0.5, { scaleY: 0 });
    TweenMax.to(messageLabelRef, 0.5, { scaleY: 0 });
    TweenMax.to(submitRef, 0.5, { scaleY: 0 });

    TweenMax.to(formBackRef, 0.5, { css: { 'z-index': 1 } });
    TweenMax.to(paperRef, 0.5, { visibility: 'visible' });
    TweenMax.to(starLeftRef, 0.5, { visibility: 'visible' });
    TweenMax.to(starRightRef, 0.5, { visibility: 'visible' });
    TweenMax.to(formTextRef, 0.5, { visibility: 'visible' });
    TweenMax.to(formResetRef, 0.5, { visibility: 'visible' });

    setMail({ name: '', email: '', message: '' });
  };

  const resetMail = e => {
    setDisabled(!disabled);

    TweenMax.to(nameRef, 0.5, { scaleY: 1 });
    TweenMax.to(mailRef, 0.5, { scaleY: 1 });
    TweenMax.to(messageRef, 0.5, { scaleY: 1 });
    TweenMax.to(nameLabelRef, 0.5, { scaleY: 1 });
    TweenMax.to(mailLabelRef, 0.5, { scaleY: 1 });
    TweenMax.to(messageLabelRef, 0.5, { scaleY: 1 });
    TweenMax.to(submitRef, 0.5, { scaleY: 1 });

    TweenMax.to(formBackRef, 0.5, { css: { 'z-index': -1 } });
    TweenMax.to(paperRef, 0.5, { visibility: 'hidden' });
    TweenMax.to(starLeftRef, 0.5, { visibility: 'hidden' });
    TweenMax.to(starRightRef, 0.5, { visibility: 'hidden' });
    TweenMax.to(formTextRef, 0.5, { visibility: 'hidden' });
    TweenMax.to(formResetRef, 0.5, { visibility: 'hidden' });
  };

  return (
    <form className="contact-form" onSubmit={sendMail} disabled={disabled}>
      <div
        className="form-back"
        ref={formBack => {
          formBackRef = formBack;
        }}
      >
        <div className="form-stars">
          <div
            className="form-star-left"
            ref={starLeft => {
              starLeftRef = starLeft;
            }}
          >
            <Star />
          </div>
          <div
            className="form-star-right"
            ref={starRight => {
              starRightRef = starRight;
            }}
          >
            <Star />
          </div>
        </div>
        <div
          className="form-paper"
          ref={paper => {
            paperRef = paper;
          }}
        >
          <Paper />
        </div>
        <div
          className="form-text"
          ref={formText => {
            formTextRef = formText;
          }}
        >
          <p>We’ll be in touch shortly.</p>
        </div>
        <span
          className="form-reset"
          onClick={resetMail}
          ref={formReset => {
            formResetRef = formReset;
          }}
        >
          Ok, thanks
        </span>
      </div>
      <label
        htmlFor="name"
        className="form-label"
        ref={nameLabel => {
          nameLabelRef = nameLabel;
        }}
      >
        Name:
      </label>
      <input
        className="form-item"
        type="text"
        name="name"
        id="name"
        placeholder="What's your name?"
        required
        value={name}
        onChange={handleChange}
        ref={nameInput => {
          nameRef = nameInput;
        }}
      />
      <label
        htmlFor="email"
        className="form-label"
        ref={emailLabel => {
          mailLabelRef = emailLabel;
        }}
      >
        Email:
      </label>
      <input
        className="form-item"
        type="email"
        name="email"
        id="email"
        placeholder="What's your email address?"
        required
        value={email}
        onChange={handleChange}
        ref={mailInput => {
          mailRef = mailInput;
        }}
      />
      <label
        htmlFor="message"
        className="form-label"
        ref={messageLabel => {
          messageLabelRef = messageLabel;
        }}
      >
        Message:
      </label>
      <textarea
        className="form-item"
        name="message"
        id="message"
        placeholder="What would you like to chat about?"
        rows="8"
        spellCheck="false"
        required
        value={message}
        onChange={handleChange}
        ref={messageInput => {
          messageRef = messageInput;
        }}
      />
      <div className="contact-button">
        <input
          className="contact-button-submit"
          type="submit"
          value="Send"
          ref={submitInput => {
            submitRef = submitInput;
          }}
          disabled={disabled}
        />
      </div>
    </form>
  );
};

export default ContactForm;
