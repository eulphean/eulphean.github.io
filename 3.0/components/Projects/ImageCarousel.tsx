"use client";

import { ReactNode, useRef, useState, useCallback, Children } from "react";

interface ImageCarouselProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  captions?: (string | null)[];
}

export default function ImageCarousel({
  children,
  title,
  subtitle,
  captions,
}: ImageCarouselProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childCount = Children.count(children);

  const handleScroll = useCallback(() => {
    const container = innerRef.current;
    if (!container) return;

    const scrollEl = container.parentElement!;
    const children = Array.from(container.children) as HTMLElement[];
    const scrollLeft = scrollEl.scrollLeft;

    // At the start of the carousel
    if (scrollLeft <= 10) {
      setActiveIndex(0);
      return;
    }

    // At the end of the carousel
    if (scrollLeft + scrollEl.offsetWidth >= scrollEl.scrollWidth - 10) {
      setActiveIndex(children.length - 1);
      return;
    }

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const viewCenter = scrollLeft + scrollEl.offsetWidth / 2;
      const distance = Math.abs(childCenter - viewCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const displayTitle =
    captions && captions[activeIndex] ? captions[activeIndex] : title;

  return (
    <div className="my-8">
      <div
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory carousel-scroll"
        onScroll={handleScroll}
      >
        <div className="flex gap-6 flex-nowrap" ref={innerRef}>
          {children}
        </div>
      </div>
      {(displayTitle || subtitle) && (
        <div className="flex items-start mt-3 justify-center text-center">
          <div>
            {displayTitle && (
              <h4 className="text-sm font-semibold text-gray-900">
                {displayTitle}
              </h4>
            )}
            {subtitle && (
              <p className="text-xs text-gray-400 tracking-wide mt-1">
                {subtitle}
              </p>
            )}
            {captions && childCount > 1 && (
              <div className="flex justify-center gap-1.5 mt-2">
                {Array.from({ length: childCount }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === activeIndex ? "bg-gray-900" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <style jsx global>{`
        .carousel-scroll {
          scrollbar-width: thin;
        }
        .carousel-scroll::-webkit-scrollbar {
          display: block;
          height: 6px;
        }
        .carousel-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .carousel-scroll::-webkit-scrollbar-thumb {
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
