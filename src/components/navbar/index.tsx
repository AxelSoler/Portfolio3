"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import lightLogo from "@/img/profile/light_logo.png";
import darkLogo from "@/img/profile/dark_logo.png";
import ThemeToggle from "../ThemeToggle";
import { useTranslations } from "next-intl";
import LanguageToggle from "../LanguageToggle";
import { useTheme } from "next-themes";
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useTheme();
  const [logo, setLogo] = useState(lightLogo);
  const t = useTranslations("Navbar");
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setTimeout(() => setShowMenu(!showMenu), 10);
  };

  useEffect(() => {
    setLogo(theme === "dark" ? lightLogo : darkLogo);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        const hamburger = document.querySelector(".hamburger");
        if (hamburger && hamburger.contains(event.target as Node)) {
          return;
        }
        toggleMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`navbar backdrop-blur-xs bg-white/50 dark:bg-zinc-900/60 transition-all duration-600 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <ul
          ref={menuRef}
          className={`flex flex-col items-center lg:justify-center lg:gap-2 w-full md:w-1/2 lg:w-1/3 h-[100vh] py-4 px-8 font-bold md:ml-auto bg-gradient-to-t from-slate-400 via-slate-100 to-slate-400 shadow-md dark:bg-gradient-to-t dark:from-[#0a0a0a] dark:via-[#004aad] dark:to-[#0a0a0a] md:border-l-2 border-black dark:border-white transition-all duration-500 ease-in-out`}
        >
          <li className="w-full flex items-center justify-center">
            <Image className="navProfilePicture" src={logo} alt="Axel Soler" />
          </li>
          <li className="w-full">
            <a
              className="pageLink border border-black dark:border-white rounded-xl bg-gradient-to-l from-slate-400 via-slate-100 shadow-md dark:bg-gradient-to-l dark:from-[#0a0a0a] dark:via-[#004aad] transition-colors duration-500 ease-in-out"
              id="aboutLink"
              href="#about"
              onClick={toggleMobileMenu}
            >
              {t("about")}
              <IoIosArrowForward size="28px" />
            </a>
          </li>
          <li className="w-full my-6">
            <a
              className="pageLink border border-black dark:border-white rounded-xl bg-gradient-to-l from-slate-400 via-slate-100 shadow-md dark:bg-gradient-to-l dark:from-[#0a0a0a] dark:via-[#004aad] transition-colors duration-500 ease-in-out"
              id="projectsLink"
              href="#professional"
              onClick={toggleMobileMenu}
            >
              {t("projects")}
              <IoIosArrowForward size="28px" />
            </a>
          </li>
          <li className="w-full">
            <a
              className="pageLink border border-black dark:border-white rounded-xl bg-gradient-to-l from-slate-400 via-slate-100 shadow-md dark:bg-gradient-to-l dark:from-[#0a0a0a] dark:via-[#004aad] transition-colors duration-500 ease-in-out"
              id="projectsLink"
              href="#education"
              onClick={toggleMobileMenu}
            >
              {t("education")}
              <IoIosArrowForward size="28px" />
            </a>
          </li>
          <li className="w-full my-6">
            <a
              className="pageLink border border-black dark:border-white rounded-xl bg-gradient-to-l from-slate-400 via-slate-100 shadow-md dark:bg-gradient-to-l dark:from-[#0a0a0a] dark:via-[#004aad] transition-colors duration-500 ease-in-out"
              id="contactLink"
              href="#contact"
              onClick={toggleMobileMenu}
            >
              {t("contact")}
              <IoIosArrowForward size="28px" />
            </a>
          </li>
          <li className="w-full mb-2">
            <LanguageToggle />
          </li>
          <li className="w-full">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
        onKeyDown={toggleMobileMenu}
        aria-label="Open menu"
      >
        <span className="bar bg-black dark:bg-white" />
        <span className="bar bg-black dark:bg-white" />
        <span className="bar bg-black dark:bg-white" />
      </button>
    </>
  );
};

export default Navbar;
