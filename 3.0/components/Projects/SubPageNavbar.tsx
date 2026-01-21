import Link from 'next/link';

interface SubPageInfo {
  slug: string;
  title: string;
  order: number;
}

interface SubPageNavbarProps {
  subpages: SubPageInfo[];
  currentSubpage: string;
  projectSlug: string;
}

export default function SubPageNavbar({ subpages, currentSubpage, projectSlug }: SubPageNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Sub-page Links */}
        <div className="flex items-center gap-8">
          {subpages.map((subpage) => {
            const isActive = subpage.slug === currentSubpage;
            const orderStr = String(subpage.order).padStart(2, '0');

            return (
              <Link
                key={subpage.slug}
                href={`/projects/${projectSlug}/build/${subpage.slug}`}
                className={`text-xs tracking-widest transition-colors pb-1 ${
                  isActive
                    ? 'text-gray-900 font-medium border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {orderStr} {subpage.title.toUpperCase()}
              </Link>
            );
          })}
        </div>

        {/* Exit Build Button */}
        <Link
          href={`/projects/${projectSlug}`}
          className="text-gray-500 text-xs tracking-wide px-6 py-1 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors"
        >
          EXIT BUILD
        </Link>
      </div>
    </nav>
  );
}
