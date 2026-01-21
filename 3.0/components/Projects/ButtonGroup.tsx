import { ReactNode } from 'react';

interface ButtonGroupProps {
  children: ReactNode;
}

export default function ButtonGroup({ children }: ButtonGroupProps) {
  return (
    <div className="flex flex-wrap gap-4 my-8">
      {children}
    </div>
  );
}
