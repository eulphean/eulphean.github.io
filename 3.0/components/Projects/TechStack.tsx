import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiPostgresql,
  SiThreedotjs,
  SiWebgl,
  SiOpenai,
  SiVercel,
  SiTailwindcss,
  SiFigma,
  SiVite,
  SiClaude,
  SiGooglegemini,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaCode } from "react-icons/fa";

interface TechItem {
  name: string;
  icon?: string;
}

interface TechStackProps {
  title?: string;
  items: TechItem[];
}

// Icon mapping using React Icons
const iconComponents: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  nextjs: SiNextdotjs,
  "next.js": SiNextdotjs,
  typescript: SiTypescript,
  react: SiReact,
  postgresql: SiPostgresql,
  threejs: TbBrandThreejs,
  "three.js": TbBrandThreejs,
  glsl: FaCode, // Generic code icon for GLSL
  webgl: SiWebgl,
  websocket: FaCode, // Generic code icon for WebSocket
  openai: SiOpenai,
  vercel: SiVercel,
  tailwindcss: SiTailwindcss,
  "tailwind css": SiTailwindcss,
  figma: SiFigma,
  vite: SiVite,
  "groq api": SiOpenai, // Using OpenAI icon as placeholder for Groq
  "openai sdk": SiOpenai,
  "tmdb api": FaCode,
  claudecode: SiClaude,
  gemini: SiGooglegemini,
  default: FaCode,
};

export default function TechStack({
  title = "Engineered With",
  items,
}: TechStackProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 my-8">
      <h3 className="text-center text-gray-900 font-semibold mb-8">{title}</h3>
      <div className="flex flex-wrap justify-center gap-12">
        {items.map((item, index) => {
          // Get the icon component, normalize the name to lowercase for matching
          const iconKey = (item.icon || item.name).toLowerCase();
          const IconComponent =
            iconComponents[iconKey] || iconComponents.default;

          return (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="text-gray-600">
                <IconComponent className="w-8 h-8" />
              </div>
              <span className="text-xs text-gray-500">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
