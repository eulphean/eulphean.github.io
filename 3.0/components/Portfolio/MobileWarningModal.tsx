"use client";

import { useState, useEffect } from "react";

export default function MobileWarningModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Small delay to ensure page has loaded
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 sm:p-8 max-w-sm mx-4 shadow-lg">
        <h2 className="text-xl font-bold text-blue-500 mb-3">Welcome!</h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          You're welcome to explore the portfolio on mobile, but it's best
          experienced on a desktop device for the full creative impact.
          <br />
          <span className="italic text-blue-500">Amay Kataria</span>
        </p>

        <button
          onClick={handleDismiss}
          className="w-full px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
