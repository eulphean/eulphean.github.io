import { ReactNode } from 'react';

interface BuildProps {
  children: ReactNode;
}

export default function Build({ children }: BuildProps) {
  return (
    <section className="mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-blue-500 text-lg font-bold">02.</span>
        <h2 className="text-2xl font-bold text-gray-900">The Build</h2>
      </div>
      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
