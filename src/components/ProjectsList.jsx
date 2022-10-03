import React from 'react';
import PropTypes from 'prop-types';
import '../css/ProjectsList.css';

const listProjects = [
  {
    name: 'URL Shortener',
    desc: ['A website capable of shortening user\'s link.', 'Random background images of cute dogs.'],
    gith: 'https://github.com/bangjdev/url-shortener/',
    prod: 'https://linker.cf/',
    img:  'https://images-eu.ssl-images-amazon.com/images/I/510sFVU23DL.png',
  },
  {
    name: 'Online Code Judging System',
    desc: ['An online programming platform which is capable of storing and evaluating user\'s code.',
           'Real-time updating submissions\' status table using web socket.'
    ],
    gith: 'https://github.com/online-judger/',
    prod: 'https://codegang.herokuapp.com/',
    img:  'https://static.data.gouv.fr/avatars/2015-02-26/970e34fe85d14c1688a5c93cb933c190/True_Icone.png',
  },
  {
    name: 'Discord Music Bot',
    desc: ['Streams music to a voice channel.'],
    gith: 'https://github.com/bangjdev/sneaky-bot',
    img:  'https://cdn.discordapp.com/app-icons/465393760025575424/8c238f82eaeb1d97ed0dd780b24eb176.png?size=512',
  },
  {
    name: 'Facebook Videos Downloader',
    desc: ['Catches the originally sharable link of videos on Facebook.',
           'Creates direct download button.',
           'Works in private group.'],
    gith: 'https://github.com/bangjdev/FBVideosDownloader',
    img:  'https://play-lh.googleusercontent.com/qY-Wq8dboplly-p1VWPuiLsHXTlihKtKHYlBCYAFIAjeZmR6WVPKjm1hjOUSu6SzzHm9',
  },
  {
    name: 'The Guiding Light Game',
    desc: ['A small puzzle-platformer game. ',
           'where the player is exploring a dark cave and needs to bounce a light beam all the way to the end.'],
    gith: 'https://github.com/bangjdev/FBVideosDownloader',
    prod: 'https://treekanicko.itch.io/the-guiding-light-weekly-game-jam-144',
    img:  'https://img.itch.zone/aW1nLzMyNTg3NjMucG5n/original/URP7Nb.png',
  },
];

const Project = ({ name, desc, gith, prod, img }) => (
  <div className="project">
    <div className="left">
      <div className="content">
        <h2>{name}</h2>
        <ul>
          {desc.map((des, idx) => (
            <li key={idx}>{des}</li>
          ))}
        </ul>
        <div className="project-buttons">
          <a href={gith} target='blank'><button>GitHub</button></a>
          {prod ? <a href={prod} target='blank'><button>Visit!</button></a>:''}
        </div>
      </div>
    </div>
    <div className="right" style={{ backgroundImage: `url(${img})` }} />
  </div>
);
Project.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.array,
  gith: PropTypes.string,
  prod: PropTypes.string,
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
        gith={ele.gith}
        prod={ele.prod}
        img={ele.img}
      />
    ))}
  </div>
);

export default ProjectsList;
