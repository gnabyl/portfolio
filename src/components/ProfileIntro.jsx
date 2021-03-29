import React from 'react';
import '../css/ProfileIntro.css';

const ProfileIntro = () => (
  <div id="profile-intro">
    <div id="intro">
      <span id="intro-title">Full Stackoverflow Developer</span>
      <div id="intro-body">
        <h1>
          Hello,
          <br />
          call me Bang
        </h1>
        <span id="intro-headline">
          I do fullstack web development and I love playing video games
        </span>
        <div id="intro-buttons">
          <button>Projects</button>
          <button>LinkedIn</button>
        </div>
      </div>
    </div>
    <div id="profile-image" />
  </div>
);

export default ProfileIntro;
