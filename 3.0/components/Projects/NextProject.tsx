import Link from 'next/link';

interface NextProjectProps {
  slug: string;
  title: string;
}

export default function NextProject({ slug, title }: NextProjectProps) {
  return (
    <div className="border-t border-gray-200 py-16 text-center">
      <span className="text-gray-400 text-xs tracking-widest block mb-4">NEXT PROJECT</span>
      <Link
        href={`/projects/${slug}`}
        className="text-3xl sm:text-4xl font-bold text-gray-900 hover:text-blue-500 transition-colors"
      >
        {title}
      </Link>
      <div className="mt-6">
        <svg
          className="w-6 h-6 mx-auto text-gray-400 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
