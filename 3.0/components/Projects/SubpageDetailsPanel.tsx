interface SubpageDetailsPanelProps {
  objective?: string;
  technicalDecisions?: string;
  keyInnovation?: string;
  outcome?: string;
  technologies?: string[];
}

export default function SubpageDetailsPanel({
  objective,
  technicalDecisions,
  keyInnovation,
  outcome,
  technologies,
}: SubpageDetailsPanelProps) {
  // Only render if at least one prop has content
  const hasContent =
    objective ||
    technicalDecisions ||
    keyInnovation ||
    outcome ||
    (technologies && technologies.length > 0);

  if (!hasContent) {
    return null;
  }

  return (
    <aside className="overflow-y-scroll overflow-x-hidden hidden lg:block bg-gray-50 p-8">
      <div className="w-64 space-y-8">
        {/* Technologies Section - Moved to top */}
        {technologies && technologies.length > 0 && (
          <>
            <div>
              <h3 className="text-gray-400 text-xs tracking-widest mb-3">
                TECHNOLOGIES
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-gray-700 text-xs border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Divider line */}
            <div className="border-t border-gray-200"></div>
          </>
        )}

        {objective && (
          <div>
            <h3 className="text-gray-400 text-xs tracking-widest mb-3">
              OBJECTIVE
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{objective}</p>
          </div>
        )}

        {technicalDecisions && (
          <div>
            <h3 className="text-gray-400 text-xs tracking-widest mb-3">
              TECHNICAL DECISIONS
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {technicalDecisions}
            </p>
          </div>
        )}

        {keyInnovation && (
          <div>
            <h3 className="text-gray-400 text-xs tracking-widest mb-3">
              KEY INNOVATION
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {keyInnovation}
            </p>
          </div>
        )}

        {outcome && (
          <div>
            <h3 className="text-gray-400 text-xs tracking-widest mb-3">
              OUTCOME
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{outcome}</p>
          </div>
        )}
      </div>
    </aside>
  );
}
