import React from 'react';
import './../assets/styles/ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out through the form below or via my email.</p>
      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactSection;
