import React from 'react';
import NavBar from './components/NavBar';
import Project from './components/Project';
import NameTag from './components/NameTag';
import './css/App.css';
// import './css/debug.css';

function App() {
    return (
        <div className="container">
            <header>
                <NameTag />
                {/* <LanguageSelector /> */}
                <NavBar />
            </header>
            <main>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
