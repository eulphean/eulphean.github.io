import Link from "next/link";

interface SubPageInfo {
  slug: string;
  title: string;
  order: number;
}

interface SubPageFooterProps {
  prevSubpage: SubPageInfo | null;
  nextSubpage: SubPageInfo | null;
  projectSlug: string;
  projectTitle: string;
}

export default function SubPageFooter({
  prevSubpage,
  nextSubpage,
  projectSlug,
  projectTitle,
}: SubPageFooterProps) {
  return (
    <div className="bg-transparent border-t border-gray-200">
      <div className="w-full px-6 py-2">
        <div className="flex justify-between items-center gap-4">
          {/* Previous Button - Left side */}
          {prevSubpage ? (
            <Link
              href={`/projects/${projectSlug}/build/${prevSubpage.slug}`}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="hidden sm:inline">PREVIOUS: {prevSubpage.title.toUpperCase()}</span>
              <span className="sm:hidden">PREVIOUS</span>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Button - Right side */}
          {nextSubpage ? (
            <Link
              href={`/projects/${projectSlug}/build/${nextSubpage.slug}`}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="hidden sm:inline">NEXT: {nextSubpage.title.toUpperCase()}</span>
              <span className="sm:hidden">NEXT</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          ) : (
            <Link
              href={`/projects/${projectSlug}`}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="hidden sm:inline">BACK TO {projectTitle.toUpperCase()}</span>
              <span className="sm:hidden">BACK</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
