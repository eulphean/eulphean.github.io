import { ReactNode } from "react";

interface OverviewProps {
  children: ReactNode;
}

export default function Overview({ children }: OverviewProps) {
  return (
    <section className="mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-blue-500 text-lg font-bold">01.</span>
        <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
      </div>
      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
