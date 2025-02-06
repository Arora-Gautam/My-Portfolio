/*
Works.js
Gautam Arora
301497001
05 Feb 2025
*/

import React from 'react';
import { FaAndroid } from 'react-icons/fa';
import './works.css';

const worksData = [
    {
        id: 1,
        title: "Housing Management System",
        link: "https://github.com/drashtam/Society-Management",
        platform: "android",
        description: "A comprehensive solution for managing housing societies and communities.",
        imageUrl: "https://via.placeholder.com/400x300",
    },
];

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">
                My educational background, technical skills, and professional experience have equipped me to thrive in this role. 
                I am open to working on any project opportunity that comes my way. Below is a list of the projects I have contributed to:
            </span>
            <div className="worksImgs">
                {worksData.map((project) => (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="worksImgContainer" 
                        key={project.id}
                    >
                        <img src={project.imageUrl} alt={project.title} className="worksImg" />
                        <div className="worksImgOverlay">
                            <h3 className="projectTitle">{project.title}</h3>
                            <p className="projectDescription">{project.description}</p>
                            <div className="platformIcon">
                                {project.platform === "android" && <FaAndroid size={40} color="#3ddc84" />}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Works;