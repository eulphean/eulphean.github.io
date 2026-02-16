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
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-6 flex-nowrap">{children}</div>
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
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar > div > * {
          flex: 0 0 auto;
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}
