import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './../assets/styles/ProjectsSection.css';

const allProjects = [
  {
    id: 1,
    title: 'Prime Clone',
    description: 'The project focuses on developing an efficient and intelligent system that recommends the most suitable crops based on various input parameters. By analyzing factors such as soil type, weather conditions, and other agricultural data, the system provides farmers with accurate crop suggestions to optimize yield and sustainability.',
    technologies: ['HTML', 'CSS'],
    githubRepo: 'https://github.com/JananiJegan/static-prime',
    category: 'Static',
  },
  {
    id: 2,
    title: 'Netflix Clone',
    description: 'The project involves creating a visually appealing and user-friendly static website inspired by Netflix. It showcases an engaging homepage with a well-structured layout, intuitive navigation, and a responsive design.',
    technologies: ['HTML', 'CSS'],
    githubRepo: 'https://github.com/JananiJegan/Static-netflix',
    category: 'Static',
  },
  {
    id: 3,
    title: 'Food Application',
    description: 'The Responsive Food App is a user-friendly web application designed for food lovers, offering a seamless browsing experience across devices. It features an elegant interface with sections like Home, About, Our Menus, and Contact.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    githubRepo: 'https://github.com/JananiJegan/Food-App-Responsive-',
    category: 'Responsive',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'The Portfolio Website is a professional and responsive web application designed to showcase skills, projects, and achievements in a visually appealing manner.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    githubRepo: 'https://github.com/JananiJegan/Porfolio-Responsive',
    category: 'Responsive',
  },
  {
    id: 5,
    title: 'User Search',
    description: 'React-based web application that allows users to search, sort, and navigate through a list of users retrieved from an API. The app features a search bar to filter users by name, a sorting option to arrange names in ascending (A-Z) or descending (Z-A) order, and includes a dark/light mode toggle for better user experience.',
    technologies: ['React JS', 'CSS', 'JavaScript'],
    githubRepo: 'https://github.com/JananiJegan/UserList-React',
    category: 'React JS',
  },
  {
    id: 6,
    title: 'CommunionHub',
    description: 'CommunionHub is a community-focused web platform that connects individuals through social, religious, and charity events. It provides a seamless user experience with features like event listing, filtering by category, and an option to add new events.',
    technologies: ['React JS', 'CSS', 'JavaScript', 'Fetch API'],
    githubRepo: 'https://github.com/JananiJegan/communionhub',
    category: 'React JS',
  },
  {
    id: 7,
    title: 'Text Editor',
    description: 'Text Editor is a simple yet interactive web-based text formatting tool that allows users to apply bold, italic, and underline styles to their text dynamically. Built using React.js and styled-components, the editor features an intuitive UI with buttons for toggling text styles, represented by recognizable icons.',
    technologies: ['React JS', 'CSS', 'JavaScript', 'Styled-Components'],
    githubRepo: 'https://github.com/JananiJegan/TextEditor',
    category: 'React JS',
  },
  {
    id: 8,
    title: 'Sales Prediction App',
    description: 'The Sales Prediction App is a machine learning-based application designed to forecast future sales trends based on historical data. It utilizes predictive analytics and ML algorithms to analyze patterns, helping businesses make data-driven decisions. The app takes input features such as past sales, market trends, seasonal variations, and customer behavior to generate accurate sales predictions.',
    technologies: ['Python', 'Django', 'ML Algorithms'],
    githubRepo: 'https://github.com/JananiJegan/SalesPrediction',
    category: 'Machine Learning',
  },
  {
    id: 9,
    title: 'Chronic Kidney Disease Prediction',
    description: 'It is a machine learning-based healthcare application designed to predict the stage of CKD (1-5) based on patient health parameters. In addition to prediction, the app integrates location-based services to recommend nearby hospitals and nephrologists for immediate medical assistance.',
    technologies: ['Python', 'Django', 'ML Algorithms'],
    githubRepo: 'https://github.com/JananiJegan/Chronic-Kidney-Disease-Prediction',
    category: 'Machine Learning',
  },
];

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Static', 'Responsive', 'React JS', 'Machine Learning'];

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
