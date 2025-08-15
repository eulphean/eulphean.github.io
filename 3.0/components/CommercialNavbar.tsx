'use client'

import linkedin from '../public/svg/in.svg';
import github from '../public/svg/github.svg';
import ig from '../public/svg/ig.svg';
import AnimatedNavLink from './AnimatedNavLink';
import AnimatedSocialIcon from './AnimatedSocialIcon';

export default function CommercialNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black-80">
      <div className="max-w-7xl mx-auto px-6 py-4 sm:px-8 sm:py-6 md:py-12">
        <div className="flex items-center justify-between">
          {/* Left side - Navigation Links */}
          <div className="flex items-center space-x-8 font-semibold">
            <AnimatedNavLink href="/" className="text-white">
              HOME
            </AnimatedNavLink>
            <AnimatedNavLink 
              href="https://works.amaykataria.com" 
              external 
              className="text-white"
            >
              WORKS
            </AnimatedNavLink>
          </div>

          {/* Right side - Social Icons */}
          <div className="flex items-center space-x-4">
            <AnimatedSocialIcon
              href="https://linkedin.com/in/amaykataria"
              src={linkedin}
              alt="LinkedIn"
              size={24}
            />
            <AnimatedSocialIcon
              href="https://instagram.com/amay.kataria"
              src={ig}
              alt="Instagram"
              size={24}
            />
            <AnimatedSocialIcon
              href="https://github.com/eulphean"
              src={github}
              alt="GitHub"
              size={24}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}