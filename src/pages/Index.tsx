
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <Hero 
        title="Precision. Passion. Performance."
        subtitle="Join the award-winning Boss Lady Dance Co. and unleash your potential through discipline, teamwork, and artistic excellence."
        ctaText="Join Our Team"
        ctaLink="/join"
        backgroundImage="/images/dance-hero.jpg"
      />
      
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
