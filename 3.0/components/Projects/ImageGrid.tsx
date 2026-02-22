import { ReactNode } from "react";

interface ImageGridProps {
  children: ReactNode;
  columns: 2 | 3 | 4;
}

export default function ImageGrid({ children, columns }: ImageGridProps) {
  console.log("COLUMNS are:", columns);
  return (
    <>
      {columns === 3 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {children}
        </div>
      )}
      {columns === 4 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          {children}
        </div>
      )}
      {columns === 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          {children}
        </div>
      )}
    </>
  );
}
