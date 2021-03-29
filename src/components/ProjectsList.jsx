import React from 'react';
import PropTypes from 'prop-types';
import '../css/ProjectsList.css';

const listProjects = [
  {
    name: 'URL Shortener',
    desc: ['A website capable of shortening user\'s link'],
    img: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
  },
  {
    name: 'Project 2',
    desc: 'description for project 2',
    img: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
  },
  {
    name: 'Project 3',
    desc: 'description for project 3',
    img: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
  },
];

const Project = ({ name, desc, img }) => (
  <div className="project">
    <div className="left">
      <div className="content">
        <h2>{name}</h2>
        <span>{desc}</span>
        <div className="project-buttons">
          <button>GitHub</button>
          <button>View Project</button>
        </div>
      </div>
    </div>
    <div className="right" style={{ backgroundImage: `url(${img})` }} />
  </div>
);
Project.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
};

const ProjectsList = () => (
  <div id="projects-list">
    <h1>Projects</h1>
    <div className="underline" />
    {listProjects.map((ele, idx) => (
      <Project
        key={idx}
        name={ele.name}
        desc={ele.desc}
        img={ele.img}
      />
    ))}
  </div>
);

export default ProjectsList;
