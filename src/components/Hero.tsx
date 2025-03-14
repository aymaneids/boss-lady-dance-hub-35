
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
  backgroundImage, // We'll keep this prop for flexibility but override it
}) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX / width - 0.5) * 3; // Further reduced movement amount
      const y = (clientY / height - 0.5) * 3;
      
      heroRef.current.style.setProperty('--x', `${x}px`);
      heroRef.current.style.setProperty('--y', `${y}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById('about-section');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&q=80&w=1000')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transform: 'translateX(var(--x, 0)) translateY(var(--y, 0))',
        transition: 'transform 0.2s ease-out',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 text-center">
        <div>
          <span className="inline-block px-4 py-1 mb-4 sm:mb-6 text-xs uppercase tracking-wider font-semibold bg-purple-600 text-white rounded-full">
            Excellence in Dance
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 font-display">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-10 max-w-3xl mx-auto">
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
