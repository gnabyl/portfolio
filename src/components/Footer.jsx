import React from 'react';
import '../css/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';

const Footer = () => (
  <>
    <div id="social-links">
      <a href="https://github.com/bangjdev/" target="blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/bang-ngn/" target="blank">
        <FaLinkedin />
      </a>
      <a href="mailto:lelybang.nguyen@gmail.com" target="blank">
        <FaEnvelopeSquare />
      </a>
    </div>
    <span>
      Bang NGUYEN ©️ 2021
    </span>
  </>
);

export default Footer;
