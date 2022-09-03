import React from 'react';
import Navbar from './Navbar';
import './ContactForm.css';

function ContactForm() {

  return (
    <>
    <Navbar />
    <div className="contact-container">
        <h2>CONTACT US</h2>
    <form action="/contact" method='POST'>
        <div className="input-container">
        <input type="text" name="name" placeholder='Full name' required/>
        <input type="email" className="email" name='email' placeholder='Email' required/>
        <textarea className="message" name='message' placeholder='Please enter your message...' required/>
        <button className="submit-contact" type='submit'>Submit</button>
        </div>
    </form>
    </div>
    </>
  )
}

export default ContactForm