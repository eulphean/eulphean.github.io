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
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory carousel-scroll">
        <div className="flex gap-6 flex-nowrap">{children}</div>
      </div>
      {(title || subtitle) && (
        <div className="flex items-start mt-3 justify-center text-center">
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
        .carousel-scroll {
          scrollbar-width: none;
        }
        .carousel-scroll::-webkit-scrollbar {
          display: none;
        }
        .carousel-scroll:hover {
          scrollbar-width: thin;
        }
        .carousel-scroll:hover::-webkit-scrollbar {
          display: block;
          height: 6px;
        }
        .carousel-scroll:hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .carousel-scroll:hover::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        .carousel-scroll > div > * {
          flex: 0 0 auto;
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}
