import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/86326c846528229120801a4c6e78a90f/b6b6819d97caa3dbc2b214357bf522d0.png" 
              alt="SolarLeads AI" 
              className="h-32 w-auto mix-blend-multiply"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer whitespace-nowrap">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer whitespace-nowrap">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer whitespace-nowrap">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer whitespace-nowrap">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all cursor-pointer whitespace-nowrap">
              Get Started
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-700 hover:text-amber-600 py-2 cursor-pointer whitespace-nowrap">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left text-gray-700 hover:text-amber-600 py-2 cursor-pointer whitespace-nowrap">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-700 hover:text-amber-600 py-2 cursor-pointer whitespace-nowrap">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-700 hover:text-amber-600 py-2 cursor-pointer whitespace-nowrap">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all cursor-pointer whitespace-nowrap w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
