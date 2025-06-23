import { FiExternalLink } from "react-icons/fi";
import SocialLinks from "../SocialLinks";
import "./index.css";

const ContactForm = () => {
  return (
    <form
      id="contact"
      className="w-full lg:w-3/5 mx-auto flex flex-col items-center text-center mt-4"
      action="https://formspree.io/p/2047778179661168386/f/contactForm"
      method="POST"
    >
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold underline">
        Let’s chat!
      </h2>
      <p className="text-lg md:text-2xl font-bold my-2">
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
          placeholder="email@gmail.com"
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
      <button className="inline-block my-2 text-lg px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transform transition duration-300" type="submit">
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
      <p className="">
        Or send me an email to{" "}
        <a
          href="mailto:axelss369@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-300 text-xl underline font-semibold transition duration-300 mt-2"
        >
          axelss369@gmail.com
        </a>
      </p>
      <SocialLinks />
    </form>
  );
};

export default ContactForm;
