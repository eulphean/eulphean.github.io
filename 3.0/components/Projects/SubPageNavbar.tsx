import Link from "next/link";

interface SubPageInfo {
  slug: string;
  title: string;
  order: number;
}

interface SubPageNavbarProps {
  subpages: SubPageInfo[];
  currentSubpage: string;
  projectSlug: string;
  projectTitle: string;
}

export default function SubPageNavbar({
  subpages,
  currentSubpage,
  projectSlug,
  projectTitle,
}: SubPageNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 font-space-grotesk">
      <div className="w-full px-6 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Left side - Project Name / Build */}
          <Link
            href={`/projects/${projectSlug}`}
            className="text-black text-xs tracking-wide hover:text-gray-600 transition-colors"
          >
            <span className="font-normal">{projectTitle.toUpperCase()}</span>
            <span className="font-light text-gray-400"> / BUILD</span>
          </Link>

          {/* Center - Sub-page Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {subpages.map((subpage) => {
              const isActive = subpage.slug === currentSubpage;
              const orderStr = String(subpage.order).padStart(2, "0");

              return (
                <Link
                  key={subpage.slug}
                  href={`/projects/${projectSlug}/build/${subpage.slug}`}
                  className={`text-xs tracking-wide transition-colors ${
                    isActive
                      ? "text-gray-900 font-medium"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {orderStr} {subpage.title.toUpperCase()}
                </Link>
              );
            })}
          </div>

          {/* Right side - Exit Build Button */}
          <Link
            href={`/projects/${projectSlug}`}
            className="text-gray-500 text-xs tracking-wide px-6 py-1 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors"
          >
            EXIT BUILD
          </Link>
        </div>
      </div>
    </nav>
  );
}
