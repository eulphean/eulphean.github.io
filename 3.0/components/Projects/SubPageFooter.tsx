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
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center">
        {/* Previous Button - Left side */}
        {prevSubpage ? (
          <Link
            href={`/projects/${projectSlug}/build/${prevSubpage.slug}`}
            className="flex items-center gap-2 px-6 py-3 text-xs font-medium tracking-wide border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-4 h-4"
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
            PREVIOUS: {prevSubpage.title.toUpperCase()}
          </Link>
        ) : (
          <div />
        )}

        {/* Next Button - Right side */}
        {nextSubpage ? (
          <Link
            href={`/projects/${projectSlug}/build/${nextSubpage.slug}`}
            className="flex items-center gap-2 px-6 py-3 text-xs font-medium tracking-wide border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors"
          >
            NEXT: {nextSubpage.title.toUpperCase()}
            <svg
              className="w-4 h-4"
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
            className="flex items-center gap-2 px-6 py-3 text-xs font-medium tracking-wide border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors"
          >
            BACK TO {projectTitle.toUpperCase()}
            <svg
              className="w-4 h-4"
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
  );
}
