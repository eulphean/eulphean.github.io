import { ReactNode } from "react";

interface ImageCarouselProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export default function ImageCarousel({
  children,
  title,
  subtitle,
}: ImageCarouselProps) {
  return (
    <div className="my-8">
      <div
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>
      {(title || subtitle) && (
        <div className="flex items-start justify-center text-center">
          <div>
            {title && (
              <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
            )}
            {subtitle && (
              <p className="text-xs text-gray-400 tracking-wide mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
