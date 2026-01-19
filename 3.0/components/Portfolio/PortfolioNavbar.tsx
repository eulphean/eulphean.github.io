'use client';

interface PortfolioNavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function PortfolioNavbar({ onNavigate }: PortfolioNavbarProps) {
  const handleClick = (sectionId: string) => {
    onNavigate(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 sm:px-8 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Name */}
          <button
            onClick={() => handleClick('hero')}
            className="text-white font-bold text-lg sm:text-xl tracking-wide hover:text-gray-300 transition-colors"
          >
            Amay Kataria
          </button>

          {/* Right side - Navigation Links */}
          <div className="flex items-center space-x-4 sm:space-x-8 font-semibold">
            <button
              onClick={() => handleClick('techstack')}
              className="text-white text-sm sm:text-base hover:text-gray-300 transition-colors"
            >
              Tech Stack
            </button>
            <button
              onClick={() => handleClick('works')}
              className="text-white text-sm sm:text-base hover:text-gray-300 transition-colors"
            >
              Works
            </button>
            <button
              onClick={() => handleClick('contact')}
              className="text-white text-sm sm:text-base hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
