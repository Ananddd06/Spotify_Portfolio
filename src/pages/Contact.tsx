import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Globe,
  Play,
  Pause,
  Volume2,
  Heart
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'hover:text-purple-400' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'Portfolio', icon: Globe, url: 'https://yourwebsite.com', color: 'hover:text-green-400' }
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'your.email@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' }
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
            Let's Connect
          </motion.h1>
          <p className="text-gray-400 text-lg">Currently available for new opportunities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Now Playing Style Card */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-900 rounded-lg p-6 sticky top-8">
              {/* Profile Section */}
              <div className="text-center mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-green-500 to-green-700 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-2xl">
                  <div className="text-4xl font-bold text-black">YN</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Your Name</h3>
                <p className="text-gray-400 text-sm mb-4">Full Stack Developer</p>
                
                {/* Now Playing Controls */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-black transition-all transform hover:scale-105"
                  >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-1 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isPlaying ? '100%' : '0%' }}
                    transition={{ duration: isPlaying ? 180 : 0 }}
                    className="bg-green-500 h-1 rounded-full"
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>0:00</span>
                  <span>Available for hire</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <Icon className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="text-xs text-gray-400">{item.label}</p>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-800 pt-4">
                <p className="text-sm text-gray-400 mb-4">Follow me on</p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className={`flex items-center space-x-2 p-3 bg-gray-800 rounded-lg text-gray-300 ${social.color} transition-colors hover:bg-gray-750`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-vertical"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Quick Response */}
              <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Quick Response
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out directly via email or LinkedIn.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-green-400 px-3 py-1 rounded-full text-xs">Open to work</span>
                  <span className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-xs">Remote friendly</span>
                  <span className="bg-gray-700 text-purple-400 px-3 py-1 rounded-full text-xs">Full-time</span>
                  <span className="bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-xs">Freelance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-4">Ready to start a project?</h3>
            <p className="text-black/80 mb-6">Let's create something amazing together. I'm always excited to work on innovative projects.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors">
                Schedule a Call
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                View Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;