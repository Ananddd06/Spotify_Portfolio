import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Brain,
  Cloud,
  Database,
  Library,
  BookOpen,
  Play,
  Music4,
  Headphones,
  Pause, // Import the Pause icon
} from "lucide-react";

// --- Data remains the same ---
const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-green-400 to-emerald-600",
      skills: ["Python", "Java", "SQL"],
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "from-blue-400 to-indigo-600",
      skills: [
        "Machine Learning Foundations",
        "Deep Learning Foundations",
        "Artificial Intelligence Applications",
        "Probability & Statistics",
        "Algorithms - I",
      ],
    },
    {
      title: "NLP & LLM",
      icon: Library,
      color: "from-pink-400 to-rose-600",
      skills: [
        "NLP",
        "Large Language Models",
        "NLTK",
        "Spacy",
        "Regex",
        "Transformers (HF)",
      ],
    },
    {
      title: "Libraries & Frameworks",
      icon: Database,
      color: "from-yellow-400 to-orange-600",
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "XGBoost",
        "PyTorch",
        "TensorFlow",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      color: "from-purple-400 to-fuchsia-600",
      skills: [
        "GitHub",
        "Git",
        "SSH",
        "LaTeX",
        "Jupyter Notebook",
        "VS Code",
      ],
    },
    {
      title: "Relevant Courses",
      icon: BookOpen,
      color: "from-red-400 to-pink-600",
      skills: [
        "CS229 – Machine Learning (Stanford)",
        "EE364a: Convex Optimization (Stephen Boyd)",
        "CS224n – NLP with Deep Learning (Stanford)",
        "CS25 – Transformers United (Stanford)",
        "CS324 – Large Language Models (Stanford)",
      ],
    },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);
  const [nowPlaying, setNowPlaying] = useState<string | null>(null);

  // --- NEW: Toggling play/pause handler ---
  const handleTrackClick = (skillName: string) => {
    if (nowPlaying === skillName) {
      // If the clicked track is already playing, pause it
      setNowPlaying(null);
    } else {
      // Otherwise, play the new track
      setNowPlaying(skillName);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-black min-h-screen text-white font-sans p-4 sm:p-6 md:p-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 flex items-center justify-center gap-3">
            <Headphones className="text-green-400 w-10 h-10" />
            <span>Skills & Expertise</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Explore my skillset like browsing a Spotify playlist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <aside className="md:col-span-4 lg:col-span-3 bg-black/30 p-4 rounded-xl">
            <h2 className="text-lg font-bold mb-4 px-2 text-gray-300">Playlists</h2>
            <ul className="space-y-2">
              {skillCategories.map((category) => (
                <li key={category.title}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      selectedCategory.title === category.title
                        ? "bg-green-500/20 text-green-300 font-semibold"
                        : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                    }`}
                  >
                    <category.icon className="w-5 h-5 flex-shrink-0" />
                    <span>{category.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <main className="md:col-span-8 lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-gray-900/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                    className={`w-24 h-24 sm:w-32 sm:h-32 rounded-lg flex items-center justify-center bg-gradient-to-br ${selectedCategory.color} shadow-2xl`}
                  >
                    <selectedCategory.icon className="w-12 h-12 sm:w-16 sm:h-16 text-black/80" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-green-400">PLAYLIST</p>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">{selectedCategory.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">
                      {selectedCategory.skills.length} tracks
                    </p>
                  </div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {selectedCategory.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                      onClick={() => handleTrackClick(skill)} // Use the new handler
                      className="flex items-center justify-between rounded-lg px-4 py-3 group cursor-pointer transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        {/* --- UPDATED: Dynamic Play/Pause Icon Logic --- */}
                        <div className="w-5 h-5 text-center flex items-center justify-center relative">
                          {nowPlaying === skill ? (
                            <Pause className="w-5 h-5 text-green-400" />
                          ) : (
                            <>
                              <span className="text-gray-400 group-hover:opacity-0 transition-opacity">
                                {i + 1}
                              </span>
                              <Play className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity absolute" />
                            </>
                          )}
                        </div>
                        <span className={`font-medium ${nowPlaying === skill ? 'text-green-300' : 'text-white'}`}>
                          {skill}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-green-400 transition-colors">
                        Track {i + 1}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      <AnimatePresence>
        {nowPlaying && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 h-16 bg-gray-900/80 backdrop-blur-lg border-t border-green-500/20 flex items-center justify-between px-6 z-50"
          >
            <div className="flex items-center space-x-3">
              <Music4 className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-white font-semibold">{nowPlaying}</p>
                <p className="text-xs text-gray-400">Now learning from: {selectedCategory.title}</p>
              </div>
            </div>
            <div className="flex items-end space-x-1 h-5">
              {[0.4, 0.2, 0.6, 0.3, 0.5].map((h, i) => (
                  <motion.span
                    key={i}
                    style={{ height: `${h * 100}%` }}
                    animate={{ scaleY: [1, 1.5, 1] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: i * 0.2,
                    }}
                    className="w-1 bg-green-400 rounded-full"
                ></motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;