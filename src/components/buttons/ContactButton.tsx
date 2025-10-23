"use client";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactButton = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShowButton(false);
            } else {
              setShowButton(true);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      observer.observe(contactSection);

      return () => {
        observer.unobserve(contactSection);
      };
    }
  }, []);

  return (
    <Link
      href="#contact"
      className={`fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-500 z-40 ${
        showButton ? "opacity-100" : "opacity-0 invisible"
      }`}
      aria-label="Go to contact form"
    >
      <FaPhone className="text-2xl" />
    </Link>
  );
};

export default ContactButton;
