'use client';

interface ContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center border-b border-gray-800"
    >
      <div className="text-center max-w-screen-lg px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Contact
        </h2>
        <p className="text-lg sm:text-xl text-gray-400">
          Contact content coming soon
        </p>
      </div>
    </section>
  );
}
