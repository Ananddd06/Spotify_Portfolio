import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Coffee, Code, Music, Camera } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { name: 'Web Development', icon: Code, description: 'Building beautiful and functional web applications' },
    { name: 'Music Production', icon: Music, description: 'Creating beats and melodies in my spare time' },
    { name: 'Photography', icon: Camera, description: 'Capturing moments and exploring composition' },
    { name: 'Coffee', icon: Coffee, description: 'Specialty coffee enthusiast and home barista' }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      period: '2018 - 2022',
      gpa: '3.8 GPA'
    },
    {
      degree: 'Full Stack Web Development',
      school: 'Coding Bootcamp',
      period: '2021',
      gpa: 'Certificate'
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
            About Me
          </motion.h1>
          <p className="text-gray-400 text-lg">Get to know the person behind the code</p>
        </div>

        {/* Bio Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 rounded-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Heart className="w-6 h-6 text-green-500 mr-3" />
            My Story
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Hi there! I'm a passionate full-stack developer who fell in love with coding during my 
              college years. What started as curiosity about how websites work evolved into a deep 
              passion for creating digital experiences that make people's lives easier.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              technologies. My approach to development is user-first, always considering how the end 
              user will interact with and benefit from the applications I build.
            </p>
            <p>
              Beyond the technical skills, I value collaboration, continuous learning, and bringing 
              creative solutions to complex problems. I'm always excited to tackle new challenges 
              and work with teams that share the same passion for quality and innovation.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 rounded-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 text-green-500 mr-3" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-green-500 pl-6 pb-6">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-green-500 font-medium">{edu.school}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400">{edu.period}</span>
                  <span className="text-gray-300 bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {edu.gpa}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-900 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Interests & Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.name}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{interest.name}</h3>
                      <p className="text-gray-400 text-sm">{interest.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;