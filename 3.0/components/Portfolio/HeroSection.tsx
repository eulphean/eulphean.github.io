'use client';

interface HeroSectionProps {
  id: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center border-b border-gray-800"
    >
      <div className="text-center max-w-screen-lg px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Creative Technologist
        </h1>
        <p className="text-lg sm:text-xl text-gray-400">
          Hero section content coming soon
        </p>
      </div>
    </section>
  );
}
