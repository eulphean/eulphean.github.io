'use client';

interface TechStackSectionProps {
  id: string;
}

export default function TechStackSection({ id }: TechStackSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center border-b border-gray-800"
    >
      <div className="text-center max-w-screen-lg px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Tech Stack
        </h2>
        <p className="text-lg sm:text-xl text-gray-400">
          Tech stack content coming soon
        </p>
      </div>
    </section>
  );
}
