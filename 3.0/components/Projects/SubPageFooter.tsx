import Link from 'next/link';

interface SubPageInfo {
  slug: string;
  title: string;
  order: number;
}

interface SubPageFooterProps {
  nextSubpage: SubPageInfo | null;
  projectSlug: string;
}

export default function SubPageFooter({ nextSubpage, projectSlug }: SubPageFooterProps) {
  if (!nextSubpage) {
    // Last page - show back to project button
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-center">
          <Link
            href={`/projects/${projectSlug}`}
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
            BACK TO PROJECT
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-end">
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
      </div>
    </div>
  );
}
