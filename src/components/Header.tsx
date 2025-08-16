import React from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDownloadResume = () => {
    // Replace with actual resume download logic
    const link = document.createElement('a');
    link.href = './Anand_J.pdf'; // Replace with actual resume path
    link.download = 'Your_Name_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getPageTitle = () => {
    const pathMap: { [key: string]: string } = {
      '/': 'Home',
      '/about': 'About Me',
      '/experience': 'Work Experience',
      '/projects': 'Projects',
      '/skills': 'Skills',
      '/contact': 'Contact'
    };
    return pathMap[location.pathname] || 'Portfolio';
  };

  return (
    <header className="bg-black border-b border-gray-800 px-6 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => navigate(-1)}
              className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => navigate(1)}
              className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
        </div>
        
        <button
          onClick={handleDownloadResume}
          className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-full font-semibold transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Resume</span>
        </button>
      </div>
    </header>
  );
};

export default Header;