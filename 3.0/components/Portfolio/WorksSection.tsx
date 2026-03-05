"use client";

import Link from "next/link";
import { Project } from "../../lib/projects";

type FeaturedWork = Project & { id?: string };

function getHref(work: Project): string {
  return work.slug ? `/projects/${work.slug}` : (work.url ?? "#");
}

function isExternal(work: Project): boolean {
  return !work.slug;
}

function parseTagsAndYear(tags: string): { category: string; year: string } {
  const parts = tags.split(" / ");
  if (parts.length <= 1) return { category: tags, year: "" };
  const year = parts[parts.length - 1];
  const category = parts.slice(0, -1).join(" / ");
  return { year, category };
}

function FeaturedCard({ work, portfolioId }: { work: FeaturedWork; portfolioId: string }) {
  const baseHref = getHref(work);
  const external = isExternal(work);
  const href = external ? baseHref : `${baseHref}?from=${portfolioId}`;

  const inner = (
    <div className="group relative bg-white border border-gray-200 p-8 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer h-full flex flex-col">
      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
        {work.name}
      </h3>
      <p className="text-xs text-gray-500 tracking-widest mt-3">{work.tags}</p>
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className="block">
      {inner}
    </Link>
  );
}

function SupportiveRow({ work, isLast }: { work: Project; isLast: boolean }) {
  const href = getHref(work);
  const external = isExternal(work);
  const { category, year } = parseTagsAndYear(work.tags);

  const inner = (
    <div
      className={`group py-6 ${!isLast ? "border-b border-gray-200" : ""} cursor-pointer`}
    >
      <div className="border-l-2 border-gray-300 group-hover:border-blue-400 transition-colors pl-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-800 tracking-tight leading-tight">
            {work.name}
          </h3>
          {year && (
            <span className="text-xs text-gray-400 shrink-0 mt-1">{year}</span>
          )}
        </div>
        <p className="text-xs text-gray-400 tracking-widest mt-1">{category}</p>
      </div>
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className="block">
      {inner}
    </Link>
  );
}

interface WorksSectionProps {
  id: string;
  portfolioId: string;
  onNavigate: (sectionId: string) => void;
  works: FeaturedWork[];
  supportiveWorks?: Project[];
}

export default function WorksSection({
  id,
  portfolioId,
  onNavigate,
  works,
  supportiveWorks,
}: WorksSectionProps) {
  const hasSupportive = supportiveWorks && supportiveWorks.length > 0;

  return (
    <section
      id={id}
      className="flex flex-col bg-gray-100 pt-16 pb-8 px-8 lg:px-16 font-space-grotesk"
    >
      {/* Column headers */}
      <div
        className={`max-w-7xl w-full mx-auto mb-8 grid grid-cols-1 ${hasSupportive ? "lg:grid-cols-[3fr_2fr]" : ""} gap-8`}
      >
        <span className="text-blue-500 text-xs tracking-widest font-light">
          [ 03. FEATURED PROJECTS ]
        </span>
        {hasSupportive && (
          <span className="text-blue-500 text-xs tracking-widest font-light hidden lg:block">
            [ ALSO SEE ]
          </span>
        )}
      </div>

      {/* Two-column content grid */}
      <div
        className={`max-w-7xl w-full mx-auto grid grid-cols-1 ${hasSupportive ? "lg:grid-cols-[3fr_2fr]" : ""} gap-8`}
      >
        {/* Left — Featured cards */}
        <div className="flex flex-col gap-4">
          {works.map((work) => (
            <FeaturedCard key={work.key} work={work} portfolioId={portfolioId} />
          ))}
        </div>

        {/* Right — Supportive list */}
        {hasSupportive && (
          <div className="flex flex-col">
            {/* Mobile label */}
            <span className="text-blue-500 text-xs tracking-widest font-light mb-6 lg:hidden">
              [ ALSO SEE ]
            </span>
            {supportiveWorks.map((work, i) => (
              <SupportiveRow
                key={work.key}
                work={work}
                isLast={i === supportiveWorks.length - 1}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Buttons */}
      <div className="max-w-7xl w-full mx-auto mt-16 flex gap-3 justify-center">
        <a
          href="https://amaykataria.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 px-4 py-2 border border-gray-200 bg-gray-100 hover:bg-gray-50 transition-colors"
        >
          <span className="text-gray-600 text-xs font-medium tracking-wide">
            ART
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
        <a
          href="https://github.com/eulphean"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 px-4 py-2 border border-gray-200 bg-gray-100 hover:bg-gray-50 transition-colors"
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
