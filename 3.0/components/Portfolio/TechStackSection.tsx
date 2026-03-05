"use client";

interface Skill {
  id: string;
  name: string;
  category: string;
}

interface TechStackSectionProps {
  id: string;
  skills: Skill[];
  onNavigate: (sectionId: string) => void;
  resumeHref: string;
  resumeFilename: string;
}

export default function TechStackSection({
  id,
  skills,
  onNavigate,
  resumeHref,
  resumeFilename,
}: TechStackSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col bg-white pt-16 pb-16 px-8 lg:px-16 font-space-grotesk"
    >
      {/* Header */}
      <div className="max-w-7xl w-full mx-auto mb-8 flex justify-between items-center">
        <span className="text-blue-500 text-xs tracking-widest font-light">
          [ 02. TECH STACK ]
        </span>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl w-full mx-auto flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-300">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="border-r border-b border-gray-300 p-6 lg:p-8 flex flex-col justify-between min-h-[140px]"
            >
              <span className="text-gray-400 text-xs tracking-wide mb-4">
                {skill.id}
              </span>
              <div>
                <h3 className="text-gray-900 text-lg lg:text-xl font-bold tracking-tight mb-3 font-space-grotesk">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-xs tracking-widest">
                  {skill.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="max-w-7xl w-full mx-auto mt-16 flex gap-3 justify-center">
        <a
          href={resumeHref}
          download={resumeFilename}
          className="flex items-center gap-6 px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
        >
          <span className="text-gray-600 text-xs font-medium tracking-wide">
            RESUME
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-6 px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
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
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
