'use client';

import Image from 'next/image';
// import { IoIosArrowForward } from 'react-icons/io';
import profilePicture from '../../img/profile/profilepic.jpg';
import './Navbar.css';

const Navbar = () => {
  const toggleMobileMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navMobileMenu');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  return (
    <nav className="navbar">
      <ul className="navMobileMenu">
        <Image className="navProfilePicture" src={profilePicture} alt="Axel Soler" />
        <a
          className="pageLink"
          id="aboutLink"
          href="#about"
          onClick={toggleMobileMenu}
        >
          About
          {/* <IoIosArrowForward size="28px" /> */}
        </a>
        <a
          className="pageLink"
          id="projectsLink"
          href="#work"
          onClick={toggleMobileMenu}
        >
          Projects
          {/* <IoIosArrowForward size="28px" /> */}
        </a>
        <a
          className="pageLink"
          id="contactLink"
          href="#contact"
          onClick={toggleMobileMenu}
        >
          Contact
          {/* <IoIosArrowForward size="28px" /> */}
        </a>
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
        <a
          href="#about"
        >
          ABOUT
        </a>
        <a
          href="#work"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
        >
          CONTACT
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
