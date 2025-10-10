"use client";

import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import logo from "@/img/profile/logo.png";
import "./index.css";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import NavLink from "../NavLink";
import { useTranslations } from "next-intl";
import LanguageToggle from "../LanguageToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const t = useTranslations("Navbar");

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setTimeout(() => setShowMenu(!showMenu), 10);
  };

  return (
    <nav className="navbar backdrop-blur-xs bg-white/50 dark:bg-zinc-900/60 shadow-sm transition-colors duration-300 ease-in-out">
      <ul
        className={`navMobileMenu md:hidden ${
          isOpen ? "flex" : "hidden"
        } bg-gradient-to-t from-slate-400 via-slate-100 to-slate-400 shadow-md dark:bg-gradient-to-t dark:from-[#0a0a0a] dark:via-[#004aad] dark:to-[#0a0a0a] transition-colors duration-500 ease-in-out`}
      >
        <Image
          className="navProfilePicture"
          src={logo}
          alt="Axel Soler"
        />
        <a
          className="pageLink border border-black dark:border-white rounded-xl bg-gradient-to-l from-slate-400 via-slate-100 shadow-md dark:bg-gradient-to-l dark:from-[#0a0a0a] dark:via-[#004aad] transition-colors duration-500 ease-in-out"
          id="aboutLink"
          href="#about"
          onClick={toggleMobileMenu}
        >
          {t("about")}
          <IoIosArrowForward size="28px" />
        </a>
        <a
          className="pageLink border border-black dark:border-white rounded-xl bg-gradient-to-l from-slate-400 via-slate-100 shadow-md dark:bg-gradient-to-l dark:from-[#0a0a0a] dark:via-[#004aad] transition-colors duration-500 ease-in-out"
          id="projectsLink"
          href="#projects"
          onClick={toggleMobileMenu}
        >
          {t("projects")}
          <IoIosArrowForward size="28px" />
        </a>
        <a
          className="pageLink border border-black dark:border-white rounded-xl bg-gradient-to-l from-slate-400 via-slate-100 shadow-md dark:bg-gradient-to-l dark:from-[#0a0a0a] dark:via-[#004aad] transition-colors duration-500 ease-in-out"
          id="contactLink"
          href="#contact"
          onClick={toggleMobileMenu}
        >
          {t("contact")}
          <IoIosArrowForward size="28px" />
        </a>
        <ThemeToggle />
        <LanguageToggle />
      </ul>
      <button
        type="button"
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
        onKeyDown={toggleMobileMenu}
      >
        <span className="bar bg-black dark:bg-white" />
        <span className="bar bg-black dark:bg-white" />
        <span className="bar bg-black dark:bg-white" />
      </button>
      <div className="navPcMenu border-b border-black dark:border-white">
        <div className="mr-auto">
          <p className="text-xl">Axel Soler</p>
          <p>{t("developer")}</p>
        </div>
        <NavLink href="#about">{t("about")}</NavLink>
        <NavLink href="#projects">{t("projects")}</NavLink>
        <NavLink href="#contact">{t("contact")}</NavLink>
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Navbar;
