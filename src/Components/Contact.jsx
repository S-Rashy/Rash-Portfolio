import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID =import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        // console.log('SUCCESS!', result.text);
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        // console.log('FAILED...', error.text);
        setStatus({ submitting: false, submitted: false, error: 'Failed to send message, Please try again.' });
      });
  };

  return (
    <ContactDiv>
      <h2>Contact Me</h2>
      <hr />
      <div className="contact">
        <form ref={form} onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="What's your name?" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <br />
          
          <input 
            type="email" 
            name="email" 
            placeholder="What's your Email?" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <br />
          
          <textarea
            name="message"
            placeholder="Please type your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <br /><br />
          
          <button type="submit" disabled={status.submitting}>
            {status.submitting ? 'Sending...' : 'Submit'}
          </button>
          
          {status.error && <p className="error-message">{status.error}</p>}
          {status.submitted && <p className="success-message">Thank you for reaching out, yor message will be attended to shortly.</p>}
        </form>
        <div id="resume"></div>
      </div>
    </ContactDiv>
  );
};

export default Contact;

const ContactDiv = styled.div`
  max-width: 1200px;
  padding: 20px;
  margin: 70px auto;
  .contact {
    display: flex;
  }
  
  h2 {
    text-align: center;
    color: #52154e;
    margin: 50px auto 0px;
    text-shadow: 2px 2px #f641d8;
    font-size: 30px;
  }
  hr {
    width: 80px;
    color: #f641d8;
    border-radius: 3px;
    border: 3px solid;
  }
  form {
    max-width: 500px;
    margin: 40px auto;
  }
  input,
  textarea {
    width: 500px;
    margin: 0px auto 20px;
    font-size: 20px;
    padding: 10px;
    background-color: #f68fe5;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  input {
    height: 50px;
    border: none;
  }
  textarea {
    height: 150px;
    margin-bottom: 10px;
  }
  button {
    color: #f641d8;
    background-color: #52154e;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 20px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    
    &:hover {
      color: #52154e;
      background-color: #f68fe5;
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  
  .error-message {
    color: #ff0033;
    text-align: center;
    font-weight: bold;
  }
  
  .success-message {
    color: #00aa55;
    text-align: center;
    font-weight: bold;
  }
  
  @media (max-width: 650px) {
    input,
    textarea,
    form {
      width: 80vw;
    }
  }
`;
