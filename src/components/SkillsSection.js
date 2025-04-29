import React from 'react';
import SkillItem from './SkillItem'; 
import './../assets/styles/SkillsSection.css';

const skillsData = [
  { name: 'HTML', level: 95 },
  { name: 'CSS/Bootstrap', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Python', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'GitHub', level: 80 },
  { name: 'Database', level: 75 },
  { name: 'Django', level: 70 },
  { name: 'Java', level: 70 },
  { name: 'C/C++', level: 70 },
  { name: 'Machine Learning', level: 60 },
  { name: 'PowerBI', level: 70 },
];

function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <SkillItem 
            key={index} 
            skillName={skill.name} 
            skillLevel={skill.level} 
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
