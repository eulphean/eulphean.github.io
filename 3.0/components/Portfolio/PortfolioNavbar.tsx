"use client";

interface PortfolioNavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function PortfolioNavbar({ onNavigate }: PortfolioNavbarProps) {
  const handleClick = (sectionId: string) => {
    onNavigate(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 font-space-grotesk">
      <div className="w-full px-6 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Left side - Name and Title */}
          <button
            onClick={() => handleClick("hero")}
            className="text-black text-sm sm:text-base tracking-wide hover:text-gray-600 transition-colors"
          >
            <span className="font-normal">AMAY KATARIA</span>
            <span className="font-light text-gray-400">
              {" "}
              / CREATIVE TECHNOLOGIST
            </span>
          </button>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <button
              onClick={() => handleClick("techstack")}
              className="text-gray-400 text-sm hover:text-gray-600 tracking-wide transition-colors"
            >
              <span>02 TECH STACK</span>
            </button>
            <button
              onClick={() => handleClick("works")}
              className="text-gray-400 text-sm hover:text-gray-600 tracking-wide transition-colors"
            >
              <span>03 WORKS</span>
            </button>
          </div>

          {/* Right side - Contact Button */}
          <button
            onClick={() => handleClick("contact")}
            className="text-black text-sm tracking-wide px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
}
