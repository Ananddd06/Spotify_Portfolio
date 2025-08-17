import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, FolderOpen, Award, Mail, Music } from 'lucide-react';

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const navItems = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/about', name: 'About', icon: User },
    { path: '/experience', name: 'Experience', icon: Briefcase },
    { path: '/projects', name: 'Projects', icon: FolderOpen },
    { path: '/skills', name: 'Skills', icon: Award },
    { path: '/contact', name: 'Contact', icon: Mail },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-black border-r border-gray-800 w-60 z-30 transform transition-transform duration-300 ease-in-out 
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
      md:relative md:translate-x-0 md:flex md:flex-col`}
    >
      {/* Logo / Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Music className="w-8 h-8 text-green-500" />
          <span className="text-xl font-bold">TrackRecord</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-900'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3 px-3 py-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-black" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">J Anand</p>
            <p className="text-xs text-gray-400">Machine Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
