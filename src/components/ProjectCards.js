import React from 'react';
import ProjectCard from './ProjectCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './ProjectCards.css';
import SectionHeader from './SectionHeader';

const projectData = [
  {
    title: 'CV Community Course',
    text: 'Contributed to section 8 of the HF Co',
    image: '/images/hf.png',
    buttons: [
      { href: 'https://huggingface.co/learn/computer-vision-course/unit0/welcome/welcome', label: 'HuggingFace Course', icon: faGithub }
    ]
  },
  {
    title: 'Subsea Neural Radiance Field (NeRF)',
    text: 'Final year project with abcdefg.... Implemented and open sourced within the nerfstudio library',
    video: 'images/IUI3-RedSea_comp.mp4',  // Add your video source here
    buttons: [
      { href: 'https://github.com/AkerBP/seathru_nerf', label: 'Github', icon: faGithub },
      { href: '/CV_Paul_Setinek.pdf', label: 'Project Report', icon: faDownload }
    ]
  },
  {
    title: 'Modern Portfolio Theory resampled',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: '/images/bachelors_thesis.png',
    buttons: [
      { href: 'https://huggingface.co/learn/computer-vision-course/unit0/welcome/welcome', label: 'HuggingFace Course', icon: faGithub }
    ]
  }
];

function ProjectCards() {
  return (
    <div className="section">
      <SectionHeader title="Projects"/>
      <Row xs={1} md={3} className="g-4">
        {projectData.map((project, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProjectCards;
