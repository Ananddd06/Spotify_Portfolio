import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web App', 'Mobile', 'API', 'Open Source'];
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      plays: '2.4K'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      category: 'Web App',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      plays: '1.8K'
    },
    {
      title: 'Weather Mobile App',
      description: 'React Native weather app with location services and push notifications',
      category: 'Mobile',
      technologies: ['React Native', 'Redux', 'Weather API'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      plays: '956'
    },
    {
      title: 'GraphQL API Server',
      description: 'Scalable GraphQL API with authentication and real-time subscriptions',
      category: 'API',
      technologies: ['GraphQL', 'Apollo', 'Node.js', 'Redis'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      plays: '743'
    },
    {
      title: 'React Component Library',
      description: 'Open source UI component library built with TypeScript and Storybook',
      category: 'Open Source',
      technologies: ['React', 'TypeScript', 'Storybook', 'Rollup'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      plays: '1.2K'
    },
    {
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot with natural language processing capabilities',
      category: 'Web App',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      plays: '3.1K'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Projects</h1>
            <p className="text-gray-400">A collection of my recent work and contributions</p>
          </div>
          
          {/* Filters */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Filter className="w-5 h-5 text-gray-400" />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-green-500 text-black'
                      : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-850 transition-colors group"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-green-500 hover:bg-green-600 text-black w-16 h-16 rounded-full flex items-center justify-center transition-transform transform hover:scale-110">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    </div>
                    <span className="text-xs text-gray-500">{project.plays} views</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-850 transition-colors group cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold mb-1 truncate">{project.title}</h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{project.plays} views</span>
                    <div className="flex space-x-2">
                      <a href={project.github} className="text-gray-400 hover:text-white">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={project.demo} className="text-green-500 hover:text-green-400">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;