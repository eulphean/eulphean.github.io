import { ReactNode } from 'react';

interface ResultProps {
  children: ReactNode;
}

export default function Result({ children }: ResultProps) {
  return (
    <section className="mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-blue-500 text-lg font-bold">03.</span>
        <h2 className="text-2xl font-bold text-gray-900">The Result</h2>
      </div>
      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
