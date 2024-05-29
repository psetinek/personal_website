import React from 'react';
import SectionHeader from './SectionHeader';
import ExperienceCard from './ExperienceCard';

const experiences = [
    {
      logo: '/images/zeiss_logo.png',
      logoLink: 'https://www.zeiss.de/corporate/home.html',
      title: 'Software Engineer (Microscopy Automation and Computer Vision)',
      subtitle: 'Zeiss - Internship',
      description: ['Automated and quality and automated measurements', 'Deployed in various sites', 'High throughput, resilient and good user interface', 'stuff 4'],
      timestamp: 'Oct 2023 - present'
    },
    {
      logo: '/images/tu_logo.png',
      logoLink: 'https://www.tuwien.at/en/',
      title: 'Teaching Assistant Continuous Simulation',
      subtitle: 'Vienna University of Technology - Part time',
      description: ['Responsibilities: Organised and held programming exercises for up to 200 students and supervised groups with individual projects.',
        'Taught Coursework: Modelling and Simulation, Numeric Algorithms, solving ODEs and discrete difference equations using Matlab/Simulink and Python.'
      ],
      timestamp: 'Feb 2021 - Nov 2022'
    },
    {
      logo: '/images/alrag_logo.png',
      logoLink: 'https://www.alrag.at/',
      title: 'Asset Management Intern / SWE',
      subtitle: 'Alrag - Internship',
      description: ['Software Development: Developed software to automatically extract data from various websites using Python, BeautifulSoup and pandas in order to identify potential properties for the acquisitions team. Created and maintained an executable, which increased efficiency in the scoping process by 25%.',
      'Managing Responsibilities: Responsible for managing and evaluating real estate projects (DCF method combined with qualitative analysis of buildings) and preparing portfolio reports for internal and external use together with the board.'
      ],
      timestamp: 'Aug 2020 - Nov 2020'
    }
  ];

  const educations = [
    {
      logo: '/images/imperial_logo.png',
      logoLink: 'https://www.imperial.ac.uk/',
      title: 'Imperial College London',
      subtitle: 'MSc Applied Computational Science and Engineering',
      description: ['GPA: distinction',
        'Relevant Coursework: Advanced Programming, Computational Mathematics, Data Science & Machine Learning, Deep Learning, Modelling and Numerical Methods, Inversion and Optimisation, Patterns in Parallel Programming',
        'test 123'
        ],
      timestamp: '2022 - 2023'
    },
    {
      logo: '/images/tu_logo.png',
      logoLink: 'https://www.tuwien.at/en/',
      title: 'Vienna University of Technology',
      subtitle: 'BSc Mechanical Engineering - Management',
      description: ['GPA: 1.9 (1-5, with 1 being best',
        'Relevant Coursework: Mathematics, Mechanics, Control Engineering, Fluid Mechanics, Statistics, Management, Finance and Optimisation',
        'GPA: 1.4 (1-5, with 1 being best)',
        'Relevant Coursework: Foundations of Information Systems, Data Analysis and Visualisation, Security and Privacy'
      ],
      timestamp: '2017 - 2022'
    },
    // Add more experiences here
  ];

function Experience() {
    return (
        <div className="section">
          <SectionHeader title="Experience"/>
          {experiences.map((experience, idx) => (
            <ExperienceCard key={idx} {...experience} />
          ))}
          <SectionHeader title="Education"/>
          {educations.map((education, idx) => (
            <ExperienceCard key={idx} {...education} />
          ))}
        </div>
      );
}

export default Experience
