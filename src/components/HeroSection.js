import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <Container fluid className="hero-content">
        <Image src="/images/profile_picture.jpg" roundedCircle fluid className="hero-image mb-4" />
        <h1 className="hero-name">Paul Setinek</h1>
        <p className="hero-description">
          Intern in Computer Vision @ Zeiss <br />
          MSc Applied Computational Science & Engineering @ Imperial College London
        </p>
        <div className="social-icons my-3">
          <a href="https://github.com/psetinek" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="mx-3" />
          </a>
          <a href="https://www.linkedin.com/in/paul_setinek" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-3" />
          </a>
          <a href="mailto:paul.setinek@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="mx-3" />
          </a>
        </div>
      </Container>
      <a className="down-arrow" href="#project-cards">
          <FontAwesomeIcon icon={faAngleDown} size="2x" className="mt-4" />
      </a>
    </div>
  );
}

export default HeroSection;
