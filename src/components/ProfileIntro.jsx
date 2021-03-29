import React from 'react';
import '../css/ProfileIntro.css';

const ProfileIntro = () => (
  <div id='profile-intro'>
    <div id='intro'>
      <span id='intro-title'>Full Stackoverflow Developer</span>
      <div id='intro-body'>
        <h1>
          Hello,
          <br />
          call me Bang
        </h1>
        <span id='intro-headline'>
          I do fullstack web development and I love playing video games
        </span>
        <div id='intro-buttons'>
          <a href='#projects-list'><button>Projects</button></a>
          <a href='https://www.linkedin.com/in/bang-ngn/' target='blank'><button>LinkedIn</button></a>
        </div>
      </div>
    </div>
    <div id='profile-image' />
  </div>
);

export default ProfileIntro;
