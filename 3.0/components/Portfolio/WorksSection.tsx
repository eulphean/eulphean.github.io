"use client";

interface WorksSectionProps {
  id: string;
  onNavigate: (sectionId: string) => void;
}

const works = [
  { id: "001", name: "SAMSARA", tags: "MONUMENTAL INSTALLATION / VIDEO /2025" },
  { id: "002", name: "PAIK", tags: "CHATBOT / INTERACTIVE / 2025" },
  { id: "003", name: "METAHUMAN", tags: "ARKIT / REAL-TIME / 2025" },
];

export default function WorksSection({ id, onNavigate }: WorksSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col bg-white pt-32 pb-16 px-8 lg:px-16 font-space-grotesk"
    >
      {/* Header */}
      <div className="max-w-7xl w-full mx-auto mb-12">
        <span className="text-blue-500 text-xs tracking-widest font-light">
          [ 03. SELECTED PROJECTS ]
        </span>
      </div>

      {/* Works List */}
      <div className="max-w-7xl w-full mx-auto flex-1">
        <div className="border-t border-gray-200">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="flex items-center py-12 border-b border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors px-4 -mx-4"
            >
              <span className="text-gray-400 text-xs tracking-wide w-16">
                {work.id}
              </span>
              <h3 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight flex-1">
                {work.name}
              </h3>
              <span className="text-gray-500 text-xs tracking-widest hidden sm:block">
                {work.tags}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="max-w-7xl w-full mx-auto mt-16 grid grid-cols-2 gap-4 max-w-md">
        <a
          href="https://works.amaykataria.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 transition-colors group"
        >
          <span className="text-gray-600 text-xs font-medium tracking-wide">
            VIEW OTHER WORKS
          </span>
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </a>
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center justify-between px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 transition-colors group"
        >
          <span className="text-gray-600 text-xs font-medium tracking-wide">
            HOME
          </span>
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
