import React from 'react';
import './intro.css';

const Intro = () => (
    <section id="intro">
        <h1 className='introTitle'>
            Welcome to My Portfolio
        </h1>
        <div className='greetingContainer'>
            <p className='introText'>
                I am a web developer specializing in creating dynamic and efficient web applications...
            </p>
        </div>
        <button 
            className="arrowButton" 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll to About section"
        />
    </section>
);

export default Intro;
