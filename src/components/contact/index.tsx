"use client";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import SocialLinks from "../SocialLinks";
import "./index.css";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);

    const response = await fetch(
      "https://formspree.io/p/2047778179661168386/f/contactForm",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      }
    );

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };
  return (
    <form
      id="contact"
      className="w-full lg:w-3/5 mx-auto flex flex-col items-center text-center mt-4"
      onSubmit={handleSubmit}
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
      {status === "success" && (
        <p className="dark:text-green-400 text-green-700 font-bold lg:text-xl mt-2">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 dark:text-red-500 font-bold lg:text-xl mt-2">Something went wrong. Try again.</p>
      )}
      <button
        className="inline-block cursor-pointer my-2 text-lg px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transform transition duration-300"
        type="submit"
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
