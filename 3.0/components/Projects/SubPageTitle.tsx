interface SubPageTitleProps {
  title: string;
  subtitle: string;
}

export default function SubPageTitle({ title, subtitle }: SubPageTitleProps) {
  return (
    <div className="pt-24 pb-12 px-6 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          {title}
        </h1>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
