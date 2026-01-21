"use client";

interface ContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  return (
    <section
      id={id}
      className="bg-white border-t border-gray-200 py-8 px-8 lg:px-16 font-space-grotesk"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left - Name and Info */}
          <div className="text-gray-400 text-xs tracking-widest">
            <span>© AMAY KATARIA 2026</span>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://instagram.com/amaykataria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xs tracking-widest hover:text-gray-600 transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="https://linkedin.com/in/amaykataria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xs tracking-widest hover:text-gray-600 transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:amay@amaykataria.com"
              className="text-gray-400 text-xs tracking-widest hover:text-gray-600 transition-colors"
            >
              EMAIL
            </a>
          </div>

          {/* Right - Location */}
          <div className="text-gray-400 text-xs tracking-widest">
            <span>CHICAGO, USA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
