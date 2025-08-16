import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Code, Database, Palette, Cloud, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-500',
      skills: [
        { name: 'React', level: 95, experience: '3+ years' },
        { name: 'TypeScript', level: 90, experience: '2+ years' },
        { name: 'Vue.js', level: 85, experience: '2+ years' },
        { name: 'Next.js', level: 88, experience: '1+ years' },
        { name: 'Tailwind CSS', level: 92, experience: '2+ years' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'text-green-500',
      skills: [
        { name: 'Node.js', level: 90, experience: '3+ years' },
        { name: 'Express.js', level: 88, experience: '3+ years' },
        { name: 'Python', level: 82, experience: '2+ years' },
        { name: 'GraphQL', level: 75, experience: '1+ years' },
        { name: 'PostgreSQL', level: 85, experience: '2+ years' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: 'text-purple-500',
      skills: [
        { name: 'AWS', level: 80, experience: '2+ years' },
        { name: 'Docker', level: 78, experience: '1+ years' },
        { name: 'Git', level: 95, experience: '3+ years' },
        { name: 'CI/CD', level: 75, experience: '1+ years' },
        { name: 'Kubernetes', level: 65, experience: '6+ months' }
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'text-pink-500',
      skills: [
        { name: 'Figma', level: 85, experience: '2+ years' },
        { name: 'UI/UX Design', level: 80, experience: '2+ years' },
        { name: 'Responsive Design', level: 92, experience: '3+ years' },
        { name: 'Adobe Creative Suite', level: 70, experience: '1+ years' }
      ]
    }
  ];

  const topSkills = [
    { name: 'React', plays: '4.2M', level: 95, trend: '+12%' },
    { name: 'Node.js', plays: '3.8M', level: 90, trend: '+8%' },
    { name: 'TypeScript', plays: '3.5M', level: 90, trend: '+15%' },
    { name: 'Tailwind CSS', plays: '2.9M', level: 92, trend: '+20%' },
    { name: 'Express.js', plays: '2.7M', level: 88, trend: '+5%' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            My Skills
          </motion.h1>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        {/* Top Skills - Spotify Style */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 rounded-lg p-8 mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold">Top Skills</h2>
          </div>
          
          <div className="space-y-4">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <div className="text-green-500 font-bold text-lg w-6">
                  {index + 1}
                </div>
                
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">
                    {skill.name.substring(0, 2)}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white truncate">{skill.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{skill.plays} projects</span>
                      <span className="text-green-500">{skill.trend}</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                      className="bg-green-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + categoryIndex * 0.2 }}
                className="bg-gray-900 rounded-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>{skill.experience}</span>
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: 0.8 + categoryIndex * 0.2 + index * 0.1, 
                            duration: 0.8 
                          }}
                          className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learning Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-black mb-4">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Rust', 'Go', 'Machine Learning', 'WebAssembly', 'Three.js'].map((skill) => (
              <span key={skill} className="bg-black/20 text-black px-4 py-2 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-black/80 mt-4">Always expanding my toolkit with emerging technologies</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;