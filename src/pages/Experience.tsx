import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: [
        'Led development of customer-facing web applications serving 100K+ users',
        'Built scalable APIs using Node.js, Express, and MongoDB',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
      logo: '🚀'
    },
    {
      company: 'Digital Solutions Ltd.',
      position: 'Frontend Developer',
      period: '2021 - 2022',
      location: 'Remote',
      type: 'Full-time',
      description: [
        'Developed responsive web applications using React and Vue.js',
        'Collaborated with design team to implement pixel-perfect UIs',
        'Integrated third-party APIs and payment systems',
        'Maintained and improved legacy codebase'
      ],
      technologies: ['React', 'Vue.js', 'JavaScript', 'SASS', 'Firebase'],
      logo: '💻'
    },
    {
      company: 'StartupXYZ',
      position: 'Junior Developer Intern',
      period: '2020 - 2021',
      location: 'New York, NY',
      type: 'Internship',
      description: [
        'Assisted in building MVP for mobile application',
        'Wrote unit tests and performed bug fixes',
        'Participated in daily standups and sprint planning',
        'Learned agile development methodologies'
      ],
      technologies: ['JavaScript', 'React Native', 'Python', 'Django'],
      logo: '🌱'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Work Experience
          </motion.h1>
          <p className="text-gray-400 text-lg">My professional journey in software development</p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-16 top-24 w-0.5 h-32 bg-gray-700"></div>
              )}
              
              <div className="flex space-x-6">
                {/* Company logo/icon */}
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-2xl z-10">
                  {exp.logo}
                </div>
                
                {/* Experience card */}
                <div className="flex-1 bg-gray-900 rounded-lg p-6 hover:bg-gray-850 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <h4 className="text-lg text-green-500 font-semibold mb-2">{exp.company}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="bg-gray-800 px-2 py-1 rounded text-xs">{exp.type}</span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 flex items-center space-x-1 text-green-500 hover:text-green-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View Company</span>
                    </button>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-4">Interested in working together?</h3>
            <p className="text-black/80 mb-6">Let's discuss how I can help bring your next project to life.</p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;