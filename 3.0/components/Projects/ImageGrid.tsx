import { ReactNode } from 'react';

interface ImageGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export default function ImageGrid({ children, columns = 2 }: ImageGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 my-8`}>
      {children}
    </div>
  );
}
