"use client";
import { useState } from "react";
import SocialLinks from "../SocialLinks";
import { useTranslations } from "next-intl";
import "./index.css";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const t = useTranslations("Contact");

  const [errors, setErrors] = useState<{
    username?: string;
    userEmail?: string;
    message?: string;
  }>({});
  const [formValues, setFormValues] = useState({
    username: "",
    userEmail: "",
    message: "",
  });

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formValues.username.trim()) {
      newErrors.username = "Name is required";
    } else if (formValues.username.length < 2) {
      newErrors.username = "Name must be at least 2 characters";
    }

    if (!formValues.userEmail.trim()) {
      newErrors.userEmail = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formValues.userEmail)) {
      newErrors.userEmail = "Invalid email format";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formValues.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    const form = e.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);

    const response = await fetch(
      "https://formspree.io/p/2047778179661168386/f/contactForm",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setStatus("success");
      setFormValues({ username: "", userEmail: "", message: "" });
      setErrors({});
    } else {
      setStatus("error");
    }
  };
  return (
    <section className="pt-6 md:w-4/5 mx-auto" id="contact">
      <div className="w-full lg:p-12 lg:pb-4 bg-gray-600/30 dark:bg-black/60 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_rgba(59,130,246,0.25)] rounded-2xl mx-auto flex flex-col items-center">
        <form
          className="w-full lg:w-3/5 flex flex-col items-center p-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold underline">
            {t("title")}
          </h2>
          <p className="text-lg md:text-2xl font-bold mt-2 md:mt-4 lg:mt-8">
            {t("subtitle")}
          </p>
          <label className="labelInput" htmlFor="username">
            {t("labelName")}
            <input
              type="text"
              className="input"
              id="username"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              placeholder={t("placeholderName") || "Your Name"}
            />
            {errors.username && (
              <p className="text-red-600 dark:text-red-500 text-sm">
                {errors.username}
              </p>
            )}
          </label>
          <label className="labelInput" htmlFor="email">
            {t("labelEmail")}
            <input
              type="email"
              className="input"
              id="email"
              name="userEmail"
              value={formValues.userEmail}
              onChange={handleChange}
              placeholder={t("placeholderEmail") || "Your Email"}
            />
            {errors.userEmail && (
              <p className="text-red-600 dark:text-red-500 text-sm">
                {errors.userEmail}
              </p>
            )}
          </label>
          <label className="labelInput" htmlFor="message">
            {t("labelMessage")}
            <textarea
              name="message"
              className="input w-full resize-y overflow-x-hidden break-words"
              id="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder={t("placeholderMessage") || "Your Message"}
            />
            {errors.message && (
              <p className="text-red-600 dark:text-red-500 text-sm">
                {errors.message}
              </p>
            )}
          </label>
          {status === "success" && (
            <p className="dark:text-green-400 text-green-700 font-bold lg:text-xl mt-2">
              {t("success")}
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 dark:text-red-500 font-bold lg:text-xl mt-2">
              {t("error")}
            </p>
          )}
          <button
            className="inline-flex items-center gap-2 cursor-pointer mt-8 text-lg px-14 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] hover:scale-105 transform transition duration-300"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                {t("sending")}
              </>
            ) : (
              t("send")
            )}
          </button>
          <SocialLinks />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
