"use client";

import Link from "next/link";
import { Project } from "../../lib/projects";

type FeaturedWork = Project & { id?: string };

const rowClass = "flex flex-col sm:flex-row sm:items-center border-b border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors px-4 -mx-4";

function ProjectRow({ work, featured }: { work: FeaturedWork | Project; featured?: boolean }) {
  const href = (work as FeaturedWork).slug
    ? `/projects/${(work as FeaturedWork).slug}`
    : (work.url ?? "#");
  const isExternal = !((work as FeaturedWork).slug);
  const id = (work as FeaturedWork).id;

  const inner = (
    <>
      <span className="text-gray-400 text-xs tracking-wide w-16 sm:w-16 shrink-0">
        {id ?? ""}
      </span>
      <div className="flex-1">
        <h3 className={`${featured ? "text-gray-900 text-3xl sm:text-4xl lg:text-5xl" : "text-gray-700 text-xl sm:text-2xl lg:text-3xl"} font-bold tracking-tight`}>
          {work.name}
        </h3>
        <span className="text-gray-500 text-xs tracking-widest sm:hidden block mt-2">
          {work.tags}
        </span>
      </div>
      <span className="text-gray-500 text-xs tracking-widest hidden sm:block">
        {work.tags}
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${rowClass} ${featured ? "py-12" : "py-8"}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${rowClass} ${featured ? "py-12" : "py-8"}`}>
      {inner}
    </Link>
  );
}

interface WorksSectionProps {
  id: string;
  onNavigate: (sectionId: string) => void;
  works: FeaturedWork[];
  supportiveWorks?: Project[];
}

export default function WorksSection({ id, onNavigate, works, supportiveWorks }: WorksSectionProps) {
  return (
    <section
      id={id}
      className="flex flex-col bg-gray-100 pt-16 pb-8 px-8 lg:px-16 font-space-grotesk"
    >
      {/* Header */}
      <div className="max-w-7xl w-full mx-auto mb-8">
        <span className="text-blue-500 text-xs tracking-widest font-light">
          [ 03. FEATURED PROJECTS ]
        </span>
      </div>

      {/* Featured Works List */}
      <div className="max-w-7xl w-full mx-auto">
        <div className="border-t border-gray-200">
          {works.map((work) => (
            <ProjectRow key={work.key} work={work} featured />
          ))}
        </div>
      </div>

      {/* Supportive Works */}
      {supportiveWorks && supportiveWorks.length > 0 && (
        <div className="max-w-7xl w-full mx-auto mt-16">
          <div className="mb-8">
            <span className="text-blue-500 text-xs tracking-widest font-light">
              [ SUPPORTIVE PROJECTS ]
            </span>
          </div>
          <div className="border-t border-gray-200">
            {supportiveWorks.map((work) => (
              <ProjectRow key={work.key} work={work} />
            ))}
          </div>
        </div>
      )}

      {/* Bottom Buttons */}
      <div className="max-w-7xl w-full mx-auto mt-16 grid grid-cols-2 gap-4 max-w-md">
        <a
          href="https://heyzine.com/flip-book/b79946ce9f.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-2 border border-gray-200 bg-gray-100 hover:bg-gray-50 transition-colors group"
        >
          <span className="text-gray-600 text-xs font-medium tracking-wide">
            MORE WORKS
          </span>
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center justify-between px-4 py-2 border border-gray-200 bg-gray-100 hover:bg-gray-50 transition-colors group"
        >
          <span className="text-gray-600 text-xs font-medium tracking-wide">
            HOME
          </span>
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </section>
  );
}
