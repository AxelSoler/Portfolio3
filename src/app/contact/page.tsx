import { FiExternalLink } from 'react-icons/fi';
import './Contact.css';

const ContactForm = () => {
  return (
    <form id="contact" className="contactForm">
      <h2 className="title">Let’s chat!</h2>
      <p className="description">
        Looking for a developer? Send me a message!
      </p>
      <label className="labelInput" htmlFor="username">
        What is your name?
        <input
          type="text"
          className="input"
          id="username"
          name="username"
          placeholder="Name"
        />
      </label>
      <label className="labelInput" htmlFor="email">
        Email Address
        <input
          type="email"
          className="input"
          id="email"
          name="userEmail"
          placeholder="email@something.com"
        />
      </label>
      <label className="labelInput" htmlFor="message">
        Send me your message
        <textarea
          name="message"
          className="input"
          id="message"
          placeholder="Enter text here"
        />
      </label>
      <button
        id="submitButton"
        type="submit"
        // disabled={state.submitting}
      >
        Send Message
      </button>
      <p id="formspreeLink">
        Powered by
        <a
          href="https://formspree.io/"
          target="_blank"
          rel="noopener noreferrer"
          id="formspree"
        >
          Formspree
          <FiExternalLink size="20px" color="#ff2441" />
        </a>
      </p>
    </form>
  );
};

export default ContactForm;
