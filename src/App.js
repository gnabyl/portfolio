import React from 'react';
import NavBar from './components/NavBar';
import ProjectsList from './components/ProjectsList';
import ProfileIntro from './components/ProfileIntro';

import './css/App.css';
// import './css/debug.css';

const App = () => {

    return (
        <div className="container">
            <header>
                <NavBar />
            </header>
            <main>
                <ProfileIntro />
                <ProjectsList />
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default App;
