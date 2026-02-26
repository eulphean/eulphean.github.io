"use client";

interface TechStackSectionProps {
  id: string;
}

const skills = [
  // 3D & Real-Time
  {
    id: "001",
    name: "UNREAL ENGINE",
    category: "VIRTUAL PRODUCTION / REAL-TIME",
  },
  { id: "002", name: "BLENDER", category: "3D MODELING / SCULPTING" },
  { id: "003", name: "R3F / THREE.JS", category: "3D WEB / CREATIVE CODING" },
  { id: "004", name: "SPLINE", category: "3D DESIGN / WEB" },
  // Web & Backend
  { id: "005", name: "REACT / REACT-NATIVE", category: "WEB & MOBILE" },
  { id: "006", name: "NODE.JS", category: "BACKEND / API" },
  { id: "007", name: "PYTHON", category: "SCRIPTING / ML" },
  { id: "008", name: "POSTGRESQL", category: "DATABASE" },
  // AI / ML
  { id: "009", name: "OPENAI SDK", category: "AI / LLM INTEGRATION" },
  { id: "010", name: "LLM / FINE-TUNING", category: "MACHINE LEARNING" },
  { id: "011", name: "COMFYUI", category: "GENERATIVE AI" },
  { id: "012", name: "STABLE DIFFUSION", category: "GENERATIVE AI" },
  // Design & Motion
  { id: "013", name: "AFTER EFFECTS", category: "MOTION DESIGN" },
  { id: "014", name: "FIGMA", category: "UI / PRODUCT DESIGN" },
  {
    id: "015",
    name: "PHOTOSHOP / ILLUSTRATOR",
    category: "DESIGN & ILLUSTRATION",
  },
  { id: "016", name: "VISUAL STORYTELLING", category: "DESIGN & MOTION" },
  // Creative Coding
  { id: "017", name: "GLSL", category: "SHADER PROGRAMMING" },
  { id: "018", name: "OPENFRAMEWORKS / C++", category: "GENERATIVE SYSTEMS" },
  { id: "019", name: "P5.JS", category: "CREATIVE CODING" },
  { id: "020", name: "TOUCH DESIGNER", category: "REAL-TIME VISUALS" },
  // Hardware
  { id: "021", name: "ARDUINO", category: "PHYSICAL COMPUTING" },
  { id: "022", name: "RASPBERRY PI", category: "PHYSICAL COMPUTING" },
  { id: "023", name: "SENSORS", category: "PHYSICAL COMPUTING" },
  { id: "024", name: "CUSTOM PCB DESIGN", category: "ELECTRONICS" },
];

export default function TechStackSection({ id }: TechStackSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col bg-gray-100 pt-16 pb-16 px-8 lg:px-16 font-space-grotesk"
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
      <div className="max-w-7xl w-full mx-auto mt-16 grid grid-cols-3 gap-4 max-w-md">
        <a
          href="/Amay Kataria CT (Feb 2026).pdf"
          download="Amay Kataria CT (Feb 2026).pdf"
          className="flex items-center justify-between px-4 py-2 border border-gray-200 bg-gray-100 hover:bg-gray-50 transition-colors group"
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
        <a
          href="https://github.com/eulphean"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-2 border border-gray-200 bg-gray-100 hover:bg-gray-50 transition-colors group"
        >
          <span className="text-gray-600 text-xs font-medium tracking-wide">
            GITHUB
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
