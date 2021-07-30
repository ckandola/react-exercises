import React from 'react';
import '../BasicMenu.css';

const About = () => {
    return (
        <div className="basicmenu-about">
            <h3>About Me</h3>
            <p>
                I studied programming in Python and Java when I was at Whatcom Community College, and I transferred to Western 
                Washington University to pursue a Bachelor's degree in computer science. My school projects were usually just 
                tests about my understanding of programming basics, but I did program a few games to demonstrate my knowledge. 
                I've made a software version of a board game called Deadwood, a Carmen Sandiego app for Android, a driving game, 
                and a stealth game using object-oriented languages like Java and C#.
            </p>

            <p>
                I had a few classes in MySQL, C, and Racket as well, but they were primarily for learning about databases, algorithms,
                and operating systems like Linux. I had several projects like simulating database behavior in Java classes, simulating
                shell behavior in C, and creating servers and clients.
            </p>
            
            <p>
                Since graduating, I have had two internships in software development, which mostly dealt with Javascript. I learned about
                Node.js, Chrome's Dev Tools, Git, and about working remotely in general in my first internship, which was with Cornerstone
                Systems Northwest. After learning a decent amount of Javascript, I was tasked with creating an encryption/decryption 
                module for my team's secret environment variables. 
            </p>
            
        </div>
    );
}

export default About;
