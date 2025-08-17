import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, BookOpen, Coffee, Brain, Rocket, GitBranch } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      degree: 'M.Tech in Artificial Intelligence',
      school: 'SRM Institute of Science and Technology, Chennai',
      period: 'Aug 2025 – Present',
    },
    {
      degree: 'B.E. in Electronics and Communication',
      school: 'Rajalakshmi Engineering College',
      period: 'Aug 2020 – May 2024',
      gpa: 'CGPA: 8.5/10',
    },
  ];

  const hobbies = [
    { 
      name: 'Machine Learning Research', 
      icon: Brain, 
      description: 'Exploring NLP, Transformers, and Large Language Models.' 
    },
    { 
      name: 'Problem Solving', 
      icon: Cpu, 
      description: 'Practicing LeetCode & GATE problems to sharpen logical skills.' 
    },
    { 
      name: 'Reading & Writing Notes', 
      icon: BookOpen, 
      description: 'Creating structured notes on ML theory and math intuition.' 
    },
    { 
      name: 'Coffee Enthusiast', 
      icon: Coffee, 
      description: 'Fueling late-night coding and research with endless cups of coffee.' 
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            About Me
          </motion.h1>
          <p className="text-gray-400 text-lg">
            A Machine Learning Engineer passionate about AI research, NLP, and building production-grade solutions.
          </p>
        </div>

        {/* About / Intro */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 rounded-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Rocket className="w-6 h-6 text-green-500 mr-3" />
            👋 Hi, I'm Anand
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              A passionate AI/ML Engineer committed to building intelligent systems that go beyond experimentation — into real-world deployment and measurable impact.
            </p>
            <p>
              Currently pursuing an <span className="text-green-400 font-semibold">M.Tech in Artificial Intelligence</span> at SRM Institute of Science and Technology, I specialize in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>🧠 Designing and training ML/DL models using foundational algorithms and state-of-the-art techniques</li>
              <li>🔁 Building end-to-end machine learning pipelines — from data ingestion and preprocessing to model serving</li>
              <li>⚙️ Implementing MLOps practices for scalable, automated, and reproducible workflows</li>
              <li>🔬 Using tools like MLflow, Airflow, Evidently AI, and Weights & Biases for experiment tracking, model monitoring, and lifecycle management</li>
              <li>🚀 Setting up robust CI/CD pipelines to deliver ML solutions faster and more reliably</li>
            </ul>
          </div>

          {/* Open Source Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center flex-wrap">
              <GitBranch className="w-5 h-5 text-green-500 mr-2" />
              🌍 Open-Source Project (Educational Purpose) 
              <span className="ml-2 text-gray-400">
                — <a
                  href="https://github.com/Ananddd06/Beginner_to_Advance_Machine_Learning_for_Freshers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 font-semibold hover:underline ml-1"
                >
                  GitHub
                </a>
              </span>
            </h3>
            <p className="text-gray-300 mb-4">
              I'm actively developing an open-source ML learning repository — crafted for students, enthusiasts, and aspiring ML engineers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>📘 Beginner-to-Advanced Machine Learning Roadmap</li>
              <li>🧪 Hands-on Jupyter Notebooks with reproducible experiments</li>
              <li>💼 Real-world case studies, mini-projects, and MLOps-ready pipeline templates</li>
              <li>🧠 Focused on conceptual clarity, practical intuition, and career-aligned learning paths</li>
            </ul>
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
            {education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-green-500 pl-6 pb-4">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-green-500 font-medium">{edu.school}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400">{edu.period}</span>
                  {edu.gpa && (
                    <span className="text-gray-300 bg-gray-800 px-3 py-1 rounded-full text-sm">
                      {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies / Interests */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-900 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Interests & Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <motion.div
                  key={hobby.name}
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
                      <h3 className="text-lg font-semibold mb-2">{hobby.name}</h3>
                      <p className="text-gray-400 text-sm">{hobby.description}</p>
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
