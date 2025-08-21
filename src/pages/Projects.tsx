import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'MLOps', 'Machine Learning','Artificial Intelligence', 'Open Source', 'Data Analysis'];
  
  const projects = [
    {
      title: 'MLOps Pipeline for Real-Time Network Threat Detection',
      description: 'Built a reproducible pipeline using DVC and MLflow to deploy an ensemble anomaly detection model for identifying network threats with high precision[cite: 28, 29].',
      category: 'MLOps',
      technologies: ['DVC', 'MLflow', 'GitHub Actions', 'Docker', 'Streamlit', 'Scikit-learn'],
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com/Ananddd06/Network_Security_end_to_end_Mlops_DVC_Mlflow',
      demo: '#',
      featured: true,
    },
    {
      title: 'US Visa Approval Prediction System',
      description: 'A continuously monitored ML system using Evidently AI for drift detection and automated retraining pipelines to ensure high accuracy over time[cite: 34, 36].',
      category: 'Machine Learning',
      technologies: ['Evidently AI', 'Scikit-learn', 'Pandas', 'Ensemble Models', 'CI/CD'],
      image: 'https://images.pexels.com/photos/8962453/pexels-photo-8962453.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com/Ananddd06/US_Visa_Prediction_ML',
      demo: '#',
      featured: true,
    },
    {
      title: 'Student Performance Prediction Analysis',
      description: 'Achieved 92% accuracy in predicting student outcomes by identifying influential factors using ANOVA and chi-squared tests[cite: 39, 41].',
      category: 'Data Analysis',
      technologies: ['Pandas', 'Scikit-learn', 'Regression', 'L1 & L2 Regularization', 'ANOVA'],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com/Ananddd06/mlProject',
      demo: '#',
      featured: false,
    },
    {
      title: 'Beginner to Advanced Machine Learning for Freshers',
      description: 'Open source educational project that guides beginners through advanced ML topics with examples and exercises.',
      category: 'Open Source',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com/Ananddd06/Beginner_to_Advance_Machine_Learning_for_Freshers',
      demo: '#',
      featured: true,
    },
     {
      title: 'Ml , DL , NLP , Transformer, LLMs, Deep digital Notes',
      description: 'Open source educational project that guides beginners through advanced Theory with examples and Mathematical formulas.',
      category: 'Open Source',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter Notebook' , 'Deep Learning' , 'Pytorch'],
      image: 'src/Images/Image.jpg',
      github: 'https://github.com/Ananddd06/Machine_Learning_indepth_notes',
      demo: '#',
      featured: false,
    },
    {
      title: 'Algerian Forest Fire Prediction',
      description: 'Data analysis and EDA notebook to predict forest fire risk using regression techniques and explore the dataset thoroughly.',
      category: 'Data Analysis',
      technologies: ['Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Regression'],
      image: 'https://images.pexels.com/photos/1323350/pexels-photo-1323350.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com/Ananddd06/Algerian_Forest_fire_Prediction_Regression_Type',
      demo: '#',
      featured: false,
    },
    {
      title: 'End-to-End ML Project with DagsHub, MLflow, DVC',
      description: 'Complete ML pipeline including data versioning with DVC and experiment tracking with MLflow to maintain reproducibility and scalability.',
      category: 'MLOps',
      technologies: ['DVC', 'MLflow', 'Python', 'Scikit-learn', 'Streamlit', 'Docker'],
      image: 'https://images.pexels.com/photos/5473946/pexels-photo-5473946.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com/Ananddd06/End_to_End_ML_Project_with_DagsHub_Mlflow_DVC',
      demo: '#',
      featured: true,
    },
    {
      title: 'Domain Specific LLM Fine-Tuning',
      description: 'Using the OpenAi API to fine-tune a domain-specific LLM for improved performance on specialized tasks.',
      category: 'Artificial Intelligence',
      technologies: ['OpenAI API', 'Python', 'React', 'Tailwind-CSS'],
      image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com/Ananddd06/Ai_Domain_LLM_Frontend',
      demo: 'https://ai-domain-llm-frontend.vercel.app/',
      featured: true,
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
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
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
