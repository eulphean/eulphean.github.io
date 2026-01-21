"use client";

interface TechStackSectionProps {
  id: string;
}

const skills = [
  { id: "001", name: "REACT / REACT-NATIVE", category: "WEB & MOBILE" },
  { id: "002", name: "NODE.JS", category: "BACKEND / API" },
  { id: "003", name: "THREE.JS / WEBGL", category: "CREATIVE CODING / WEB" },
  { id: "004", name: "GLSL", category: "SHADER PROGRAMMING" },
  { id: "005", name: "COMFYUI / STABLE DIFFUSION", category: "GENERATIVE AI" },
  { id: "006", name: "LLM / FINE-TUNING", category: "MACHINE LEARNING" },
  { id: "007", name: "C++ / OPENFRAMEWORKS", category: "GENERATIVE SYSTEMS" },
  { id: "008", name: "ARDUINO / RASPBERRY PI", category: "PHYSICAL COMPUTING" },
  {
    id: "009",
    name: "UNREAL ENGINE",
    category: "VIRTUAL PRODUCTION / REAL-TIME",
  },
  { id: "010", name: "BLENDER", category: "3D MODELING / SCULPTING" },
  { id: "011", name: "PUREDATA / VCVRACK", category: "SOUND SYNTHESIS" },
  { id: "012", name: "FREECAD", category: "CAD / FABRICATION" },
];

export default function TechStackSection({ id }: TechStackSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col bg-gray-100 pt-32 pb-16 px-8 lg:px-16 font-space-grotesk"
    >
      {/* Header */}
      <div className="max-w-7xl w-full mx-auto mb-12 flex justify-between items-center">
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
              className="border-r border-b border-gray-300 p-6 lg:p-8 flex flex-col justify-between min-h-[180px]"
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
      <div className="max-w-7xl w-full mx-auto mt-16 grid grid-cols-2 gap-4 max-w-md">
        <a
          href="/resume.pdf"
          download
          className="flex items-center justify-between px-4 py-2 border border-gray-200 bg-gray-100 hover:bg-gray-50 transition-colors group"
        >
          <span className="text-gray-600 text-xs font-medium tracking-wide">
            DOWNLOAD RESUME
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
        <a
          href="https://github.com/eulphean"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-2 border border-gray-200 bg-gray-100 hover:bg-gray-50 transition-colors group"
        >
          <span className="text-gray-600 text-xs font-medium tracking-wide">
            VISIT GITHUB
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
      </div>
    </section>
  );
}
