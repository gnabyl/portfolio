import React from 'react';
import NavBar from './components/NavBar';
import Project from './components/Project';
import NameTag from './components/NameTag';
import ProfileIntro from './components/ProfileIntro';

import './css/App.css';
// import './css/debug.css';

const App = () => {

    return (
        <div className="container">
            <header>
                <NameTag />
                {/* <LanguageSelector /> */}
                <NavBar />
            </header>
            <main>
                <ProfileIntro />
                <Project />
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default App;
