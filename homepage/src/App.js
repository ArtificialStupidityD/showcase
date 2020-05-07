import React from 'react';
import resume from './Resume_plain.pdf';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Darren Fong Zheng Wai</h1>
                Bsc. Artificial Intelligence + Computer Science
                <br/>
                University of Birmingham 2019


            </header>
            <p>Currently a freelancing as a Web Dev and moonlighting as a tutor teaching children basic programming
                in <a href={'https://scratch.mit.edu'}>Scratch</a></p>

            <p>I am fluent in many javascript frameworks and backend technologies such as </p>
            Client Facing Frameworks
            <ol>
                <li>React.js</li>
                <li>Vue.js</li>
                <li>javascript</li>
                <li>css</li>
                <li>html</li>
            </ol>
            Backend Technologies
            <ol>
                <li>expressjs</li>
                <li>auth0</li>
                <li>bcrypt javascript library</li>
                <li>json</li>
                <li>jwt</li>
            </ol>
            Databases technologies
            <ol>
                <li>mysql</li>
                <li>mongoDB</li>
                <li>Amazon S3</li>
            </ol>
            Hosting Servers
            <ol>
                <li>Nginx</li>
                <li>Amazon EC2</li>
            </ol>

            See some of my works here:
            <a href={'https://whitematters.com'}>Whitematters</a> - A website dedicated to helping grieving family find
            the best deal to send off their
            loved ones
            <br/>
            <a href={resume}>Click here for my resume</a>
        </div>
    );
}

export default App;
