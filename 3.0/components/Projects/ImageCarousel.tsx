import { ReactNode } from 'react';

interface ImageCarouselProps {
  children: ReactNode;
}

export default function ImageCarousel({ children }: ImageCarouselProps) {
  return (
    <div className="my-8">
      <div
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {children}
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
