import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IntroductionSection from '../components/IntroductionSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import './../assets/styles/PortfolioPage.css'; // Create CSS for this page

function PortfolioPage() {  
  return (
    <div className="portfolio-page">
      <Navbar />
      <IntroductionSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default PortfolioPage;