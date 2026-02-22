import Image from "next/image";
import Link from "next/link";

interface ImageCardProps {
  src: string;
  title: string;
  subtitle?: string;
  href?: string;
  aspect?: "landscape" | "portrait" | "wide" | "square" | "auto" | string;
  fit?: "cover" | "contain";
  centered?: boolean;
}

const aspectRatios: Record<string, string> = {
  landscape: "4/3",
  portrait: "3/4",
  wide: "16/9",
  square: "1/1",
  auto: "auto",
};

export default function ImageCard({
  src,
  title,
  subtitle,
  href,
  aspect = "landscape",
  fit = "cover",
  centered = false,
}: ImageCardProps) {
  // Get aspect ratio: use predefined if exists, otherwise use custom value or aspect itself
  const getAspectRatio = () => {
    if (aspect === "auto") {
      return "auto";
    }
    return aspectRatios[aspect] || aspect;
  };

  const content = (
    <div className="group cursor-pointer">
      <div
        className={`relative overflow-hidden rounded-lg bg-gray-100 border border-gray-200 ${aspect === "auto" ? "" : ""}`}
        style={{ aspectRatio: getAspectRatio() }}
      >
        <Image
          src={src}
          alt={title}
          fill={aspect !== "auto"}
          width={aspect === "auto" ? 1200 : undefined}
          height={aspect === "auto" ? 800 : undefined}
          className={`${aspect === "auto" ? "w-full h-auto" : fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-105`}
        />
      </div>
      {title && (
        <div className="mt-3">
          <div className={`flex items-center justify-center ${centered ? "sm:justify-center" : "sm:justify-between"} gap-2`}>
            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-500 transition-colors">
              {title}
            </h4>
            {href && (
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
          {subtitle && (
            <p className={`text-xs text-gray-400 tracking-wide mt-1 text-center ${centered ? "sm:text-center" : "sm:text-left"}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
