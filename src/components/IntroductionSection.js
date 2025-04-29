import React from 'react';
import './../assets/styles/IntroductionSection.css';

function IntroductionSection() {
  
  return (
    <section className="introduction-section">
      <h1>Hi, I'm Janani J</h1>
      <p>I'm a Full Stack Developer.</p>
      <p>
      A tech enthusiast with expertise in Full-Stack Development, Machine Learning, and App Development. I enjoy building innovative solutions that enhance efficiency and solve real-world problems. My passion for technology and problem-solving drives me to explore new challenges, from developing web applications to working on AI-powered projects.
      </p>
      <div className="intro-links">
        <a href="https://drive.google.com/file/d/1FZ24YI9Y-Hq3gPe5XB4lANt941iBl5Wh/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href="https://github.com/JananiJegan" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default IntroductionSection;