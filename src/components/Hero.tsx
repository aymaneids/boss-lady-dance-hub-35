
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX / width - 0.5) * 5; // Reduced movement amount for better performance
      const y = (clientY / height - 0.5) * 5;
      
      heroRef.current.style.setProperty('--x', `${x}px`);
      heroRef.current.style.setProperty('--y', `${y}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById('content-section');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transform: 'translateX(var(--x, 0)) translateY(var(--y, 0))',
        transition: 'transform 0.2s ease-out',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
      
      <div className="container relative z-10 px-6 text-center">
        <div>
          <span className="inline-block px-4 py-1 mb-6 text-xs uppercase tracking-wider font-semibold bg-purple-600 text-white rounded-full">
            Excellence in Dance
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          <Link
            to={ctaLink}
            className="btn-primary"
          >
            {ctaText}
          </Link>
        </div>
        
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
