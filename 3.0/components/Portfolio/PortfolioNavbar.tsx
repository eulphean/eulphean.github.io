"use client";

import Link from "next/link";

type NavbarMode = "portfolio" | "project";

interface PortfolioNavbarProps {
  mode?: NavbarMode;
  onNavigate?: (sectionId: string) => void;
}

export default function PortfolioNavbar({
  mode = "portfolio",
  onNavigate,
}: PortfolioNavbarProps) {
  const handleClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 font-space-grotesk">
      <div className="w-full px-6 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Left side - Name and Title */}
          {mode === "portfolio" ? (
            <button
              onClick={() => handleClick("hero")}
              className="text-black text-xs tracking-wide hover:text-gray-600 transition-colors"
            >
              <span className="font-normal">AMAY KATARIA</span>
              <span className="font-light text-gray-400">
                {" "}
                / CREATIVE TECHNOLOGIST
              </span>
            </button>
          ) : (
            <Link
              href="/creativetech"
              className="text-black text-xs tracking-wide hover:text-gray-600 transition-colors"
            >
              <span className="font-normal">AMAY KATARIA</span>
              <span className="font-light text-gray-400">
                {" "}
                / CREATIVE TECHNOLOGIST
              </span>
            </Link>
          )}

          {/* Center - Navigation Links (only in portfolio mode) */}
          {mode === "portfolio" && (
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <button
                onClick={() => handleClick("techstack")}
                className="text-gray-400 text-xs hover:text-gray-600 tracking-wide transition-colors"
              >
                <span>02 TECH STACK</span>
              </button>
              <button
                onClick={() => handleClick("works")}
                className="text-gray-400 text-xs hover:text-gray-600 tracking-wide transition-colors"
              >
                <span>03 PROJECTS</span>
              </button>
            </div>
          )}

          {/* Right side - Button */}
          {mode === "portfolio" ? (
            <button
              onClick={() => handleClick("contact")}
              className="text-gray-500 text-xs tracking-wide px-6 py-1 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              CONTACT
            </button>
          ) : (
            <Link
              href="/creativetech#works"
              className="text-gray-500 text-xs tracking-wide px-6 py-1 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              BACK TO WORKS
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
