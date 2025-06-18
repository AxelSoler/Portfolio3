"use client";

import Link from "next/link";
import Image from "next/image";
// import { IoIosArrowForward } from 'react-icons/io';
import profilePicture from "../../img/profile/profilepic.jpg";
import "./Navbar.css";

const Navbar = () => {
  const toggleMobileMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navMobileMenu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <ul className="navMobileMenu">
        <Image
          className="navProfilePicture"
          src={profilePicture}
          alt="Axel Soler"
        />
        <Link
          className="pageLink"
          id="aboutLink"
          href="/"
          onClick={toggleMobileMenu}
        >
          About
          {/* <IoIosArrowForward size="28px" /> */}
        </Link>
        <Link
          className="pageLink"
          id="projectsLink"
          href="/projects"
          onClick={toggleMobileMenu}
        >
          Projects
          {/* <IoIosArrowForward size="28px" /> */}
        </Link>
        <Link
          className="pageLink"
          id="contactLink"
          href="/contact"
          onClick={toggleMobileMenu}
        >
          Contact
          {/* <IoIosArrowForward size="28px" /> */}
        </Link>
      </ul>
      <button
        type="button"
        className="hamburger"
        onClick={toggleMobileMenu}
        onKeyDown={toggleMobileMenu}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <ul className="navPcMenu">
        <Link href="/">ABOUT</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/contact">CONTACT</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
