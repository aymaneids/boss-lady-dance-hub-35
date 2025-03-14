
import React from 'react';
import { Calendar, Clock, Award } from 'lucide-react';

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      title: "Little Stars",
      ageRange: "5-8 years",
      description: "Introduction to dance techniques, rhythm, and movement basics in a fun and engaging environment.",
      schedule: "Tuesdays & Thursdays, 4:00-5:00 PM",
      color: "bg-gradient-to-r from-purple-400 to-purple-500",
    },
    {
      title: "Junior Elite",
      ageRange: "9-12 years",
      description: "Building on fundamentals with more complex routines and performance techniques.",
      schedule: "Mondays, Wednesdays & Fridays, 5:00-6:30 PM",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
    {
      title: "Teen Performance",
      ageRange: "13-15 years",
      description: "Advanced choreography, performance skills, and competition preparation.",
      schedule: "Mondays, Wednesdays & Fridays, 6:30-8:00 PM",
      color: "bg-gradient-to-r from-purple-600 to-purple-700",
    },
    {
      title: "Senior Company",
      ageRange: "16-18 years",
      description: "Pre-professional training focused on precision, artistry, and leadership.",
      schedule: "Tuesdays, Thursdays & Saturdays, 6:30-8:30 PM",
      color: "bg-gradient-to-r from-purple-700 to-purple-800",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="section-heading">Our Programs</h2>
          <p className="section-subheading">
            Tailored training for all ages and skill levels, focusing on technique, performance, and team spirit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 reveal opacity-0"
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className={`h-24 ${program.color} flex items-center justify-center`}>
                <h3 className="text-2xl font-bold text-white">{program.title}</h3>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full mb-4">
                  {program.ageRange}
                </span>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {program.description}
                </p>
                <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-4">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{program.schedule.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{program.schedule.split(',')[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal opacity-0" style={{ transitionDelay: '0.6s' }}>
          <div className="inline-flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-8">
            <Award size={32} className="text-purple-500 mr-4" />
            <div className="text-left">
              <h4 className="text-xl font-bold mb-1">Competition Team</h4>
              <p className="text-gray-600 dark:text-gray-300">
                By invitation only. Our elite dancers representing Boss Lady Dance Co in regional and national competitions.
              </p>
            </div>
          </div>
          <a href="/programs" className="btn-primary">
            View Full Program Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
