import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const AmalfiWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ page, label }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-4 py-2 rounded-lg transition-colors ${
        currentPage === page ? 'bg-yellow-400 text-white' : 'text-yellow-400 hover:bg-yellow-400/10'
      }`}
    >
      {label}
    </button>
  );

  const pageContent: Record<string, { title: string; subtitle?: string; content: string; bg: string }> = {
    home: {
      title: "Amalfi Coin",
      subtitle: "Relive your childhood gameboy days with $AMA",
      bg: "bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
    },
    about: {
      title: "About",
      content: "The Amalfi Coast, a UNESCO World Heritage site, is a stunning 50-kilometer stretch of coastline along the southern edge of Italy's Sorrentine Peninsula. Known for its dramatic cliffs, colorful towns, and crystal-clear waters, it's one of the world's most captivating destinations. Visitors flock to its picturesque villages, pristine beaches, and historic sites, making it a symbol of the Italian dolce vita. $AMA was created to embody the spirit of the travel, bring together those a with a dream to escape to the sunny Italian coast.",
      bg: "bg-yellow-400"
    },
    tokenomics: {
      title: "Tokenomics",
      content: "Token supply: 1,000,000,000 $AMA\nLP Burnt.",
      bg: "bg-yellow-400"
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-yellow-400">
              $AMA
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <NavLink page="home" label="Home" />
              <NavLink page="about" label="About" />
              <NavLink page="tokenomics" label="Tokenomics" />
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-yellow-400 hover:bg-yellow-400/10 p-2 rounded-lg"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink page="home" label="Home" />
              <NavLink page="about" label="About" />
              <NavLink page="tokenomics" label="Tokenomics" />
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className={`min-h-screen pt-16 ${pageContent[currentPage].bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl ${
            currentPage === 'home' ? 'mt-24' : ''
          }`}>
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">
              {pageContent[currentPage].title}
            </h1>
            {currentPage === 'home' ? (
              <p className="text-xl text-gray-700">
                {pageContent[currentPage].subtitle}
              </p>
            ) : (
              <p className="text-gray-700 whitespace-pre-line">
                {pageContent[currentPage].content}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AmalfiWebsite;