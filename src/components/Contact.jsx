import React from 'react';

const Contact = () => (
  <section>
    <h2>Contact</h2>
    <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a></p>
    <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
