interface TechItem {
  name: string;
  icon?: string;
}

interface TechStackProps {
  title?: string;
  items: TechItem[];
}

// Simple icon components
const icons: Record<string, JSX.Element> = {
  threejs: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z"/>
    </svg>
  ),
  typescript: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm10.5 10.5v-1.8h-3v7.2h-1.8v-7.2h-3v-1.8h7.8v1.8h-1.8v7.2h1.8v-5.4z"/>
    </svg>
  ),
  glsl: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  websocket: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 8l5 5 5-5M7 16l5-5 5 5"/>
    </svg>
  ),
  react: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="2.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
    </svg>
  ),
  default: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <path d="M9 9h6M9 12h6M9 15h4"/>
    </svg>
  ),
};

export default function TechStack({ title = "Engineered With", items }: TechStackProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 my-8">
      <h3 className="text-center text-gray-900 font-semibold mb-8">{title}</h3>
      <div className="flex flex-wrap justify-center gap-12">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="text-gray-600">
              {icons[item.icon || 'default'] || icons.default}
            </div>
            <span className="text-xs text-gray-500">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
