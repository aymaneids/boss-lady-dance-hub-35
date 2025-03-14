
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Award, Calendar, Share2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-28 pb-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 mb-6 text-xs uppercase tracking-wider font-semibold bg-white text-purple-600 rounded-full">About Us</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Our Story & Mission</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover the journey, values, and vision behind Boss Lady Dance Co.
          </p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Journey</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2015 by professional dancer and choreographer Alicia Johnson, Boss Lady Dance Co began as a small community dance program with a big vision: to create an elite dance team that would empower young girls through artistic excellence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                What started with just 12 dancers in a rented community center has grown into one of the region's most respected competitive dance companies, with over 100 dancers across multiple age divisions and a dedicated training facility.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our journey has been marked by countless hours of practice, numerous competition trophies, and most importantly, the transformation of young dancers into confident, disciplined performers who carry their skills beyond the stage.
              </p>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-64 h-64 bg-purple-200 rounded-lg -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gold-200 rounded-lg -z-10"></div>
                <div className="relative h-full w-full overflow-hidden rounded-lg shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1528213049955-adbe6fe3dc40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                    alt="Dance studio with dancers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The core principles that guide everything we do at Boss Lady Dance Co.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-purple-500" />,
                title: "Team Unity",
                description: "We foster a supportive environment where dancers learn the power of collaboration and lift each other up."
              },
              {
                icon: <Award className="h-10 w-10 text-purple-500" />,
                title: "Excellence",
                description: "We pursue the highest standards in technique, performance, and personal conduct."
              },
              {
                icon: <Calendar className="h-10 w-10 text-purple-500" />,
                title: "Discipline",
                description: "We instill the importance of commitment, punctuality, and consistent practice."
              },
              {
                icon: <Share2 className="h-10 w-10 text-purple-500" />,
                title: "Community",
                description: "We believe in giving back through performances and programs that inspire our community."
              },
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The dedicated professionals behind Boss Lady Dance Co.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alicia Johnson",
                role: "Founder & Artistic Director",
                bio: "Former professional dancer with 15+ years of choreography experience and a passion for developing young talent.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              },
              {
                name: "Marcus Taylor",
                role: "Head Coach & Choreographer",
                bio: "Internationally acclaimed dancer specializing in majorette and contemporary styles with 10+ years of teaching experience.",
                image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              },
              {
                name: "Tanya Williams",
                role: "Junior Division Coach",
                bio: "Former competition team champion who brings energy and technical precision to our youngest dancers.",
                image: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
              },
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-500 dark:text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="/team" className="btn-primary">View Full Team</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
