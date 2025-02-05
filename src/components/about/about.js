    /*

    About.js
    Gautam Arora
    301497001
    05 Feb 2025

    */
    import React from 'react';
import Resume from '../../assets/cv.pdf'; // Path to your resume
import bg from '../../assets/gautam.png'; // Your profile image
import './about.css';

    const About = () => (
        <section id="about">
            <div className="introContent">
                {/* Image on the left */}
                <div className="imageWrapper">
                    <img src={bg} alt="Profile" className="bg" />
                </div>

                {/* Content and button on the right */}
                <div className="textWrapper">
                    <span className="hello">Greetings,</span>
                    <span className="introText">
                        I am <span className="introName">Gautam Arora</span>, <br />Web Developer
                    </span>
                    <p className="introPara" style={{ fontSize: '1.2rem' }}>My mission as a web developer is to create intuitive, accessible, and high-performance websites that provide exceptional user experiences. I strive to write clean, efficient code that is both maintainable and scalable while adhering to the latest web standards and security practices. By continuously learning and adapting to emerging technologies, I aim to deliver solutions that are both innovative and aligned with the goals of my clients, ensuring their success in the digital landscape.
                    </p>

                    {/* Resume download button */}
                    <a href={Resume} download="Gautam Arora Resume" className="resumeBtn">
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );

    export default About;
