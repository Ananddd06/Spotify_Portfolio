import React from 'react';
import { motion } from 'framer-motion';
import { Play, MapPin, Calendar, ExternalLink } from 'lucide-react';
import anandJImage from '../Images/AnandJ.jpeg';

const Home: React.FC = () => {
  const stats = [
    // { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies Used', value: '15+' },
    { label: 'Coffee Cups', value: '∞' },
    { label : `Currently Learning`, value: 'Transformers'}
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8 mb-12">
          <img src={anandJImage} alt="Anand J" className="w-64 h-64 rounded-lg shadow-2xl object-cover"/>
          
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-green-500 text-black text-xs px-3 py-1 rounded-full font-semibold">VERIFIED DEVELOPER</span>
            </div>
            <h1 className="text-6xl font-bold mb-4">J ANAND</h1>
            <p className="text-xl text-gray-300 mb-6">Machine Learning Engineer • AI Engineer • Problem Solver </p>
            
            <div className="flex items-center space-x-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Chennai , In</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Available for hire</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                <Play className="w-5 h-5 fill-current" />
                <span>View Projects</span>
              </button>
              <a href="https://www.linkedin.com/in/anandj06/" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 border border-gray-600 hover:border-white px-6 py-3 rounded-full transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>LinkedIn</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-green-500 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* About Preview */}
        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Passionate full-stack developer with 3+ years of experience building scalable web applications. 
            I specialize in React, Node.js, and modern JavaScript frameworks. When I'm not coding, 
            you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
              <span key={tech} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;