import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from './CardComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUserTie, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import './AboutMe.css';

function AboutMe() {
  return (
    <div className="section">
      <Row className="justify-content-center">
        <Col md={6} lg={6} xl={6} className="mb-4 d-flex justify-content-center">
          <CardComponent
            title={
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faUserTie} className="me-2" />
                <span>About Me</span>
              </div>
            }
            text={
              <>
                <p>
                  After having shifted my focus from Mechanical Engineering to to Computer Science, I am an Imperial College London graduate with an overall mark of 80%  in Applied Computational Science and Engineering, MSc. etc....
                </p>
                <p>
                  I am interested in computer Vision as well as numerical simulation. 3D CV for my Independent Research Project. Currently working on production ready Fullstack Industry microscopy automation and CV that will do production critical automated measurements.
                </p>
                <p>
                  Third short paragraph...
                </p>
              </>
 
            }
            buttons={[
              { href: '/CV_Paul_Setinek.pdf', label: 'Download CV', icon: faDownload }
            ]}
          />
        </Col>
        <Col md={6} lg={6} xl={6} className="mb-4 d-flex justify-content-center">
          <CardComponent
            title={
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faScrewdriverWrench} className="me-2" />
                <span>Skills</span>
              </div>
            }
            text={
              <ul>
                <li>Computer Vision</li>
                <li>Machine Learning</li>
                <li>Python & C++</li>
                <li>React & JavaScript</li>
                <li>Data Analysis</li>
                <li>Project Management</li>
              </ul>
            }
          />
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
