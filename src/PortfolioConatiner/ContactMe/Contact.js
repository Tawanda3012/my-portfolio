import React from 'react';
import './ContactForm.css'; // Import the CSS file for styling

function ContactForm() {
  return (
    <div className="form-container">
      <form action="https://formspree.io/f/xayrqldw/nharetawanda@gmail.com" method="POST" className="contact-form">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="_replyto" placeholder="Your email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
