import './SocialLinks.css';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const SocialLinks = () => (
  <div className="socialMedia">
    <ul className="ulSocial">
      <li className="social">
        <a
          href="https://github.com/AxelSoler"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <BsGithub color="#004aad" size="28px" />
        </a>
      </li>
      <li className="social">
        <a
          href="https://www.linkedin.com/in/axel-soler-dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin color="#004aad" size="28px" />
        </a>
      </li>
      <li className="social">
        <a
          href="https://angel.co/u/axel-soler"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Angellist"
        >
          <FaAngellist color="#004aad" size="28px" />
        </a>
      </li>
      <li className="social">
        <a
          href="https://twitter.com/AxelSoler18"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <BsTwitter color="#004aad" size="28px" />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialLinks;
