"use client";

interface WorksSectionProps {
  id: string;
}

const works = [
  { id: "001", name: "SAMSARA", tags: "MONUMENTAL INSTALLATION / VIDEO /2025" },
  { id: "002", name: "PAIK", tags: "CHATBOT / INTERACTIVE / 2025" },
  { id: "003", name: "METAHUMAN", tags: "ARKIT / REAL-TIME / 2025" },
];

export default function WorksSection({ id }: WorksSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col bg-white pt-32 pb-16 px-8 lg:px-16 font-space-grotesk"
    >
      {/* Header */}
      <div className="max-w-7xl w-full mx-auto mb-12">
        <span className="text-blue-500 text-xs tracking-widest font-light">
          [ 03. SELECTED WORKS ]
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
    </section>
  );
}
