export interface Skill {
  id: string;
  name: string;
  category: string;
}

const SKILLS_REGISTRY: Record<string, Omit<Skill, "id">> = {
  "claude-code": { name: "CLAUDE CODE", category: "SOFTWARE ENGINEERING" },
  python: { name: "PYTHON", category: "SCRIPTING / ML" },
  "openai-sdk": { name: "OPENAI SDK / LLM", category: "AI / MACHINE LEARNING" },
  comfyui: { name: "COMFYUI", category: "GENERATIVE AI" },
  nodejs: { name: "NODE.JS", category: "BACKEND / API" },
  "react-react-native": {
    name: "REACT / REACT-NATIVE",
    category: "WEB & MOBILE",
  },
  supabase: { name: "SUPABASE", category: "DATABASE & AUTH" },
  "unreal-engine": {
    name: "UNREAL ENGINE",
    category: "VIRTUAL PRODUCTION / REAL-TIME",
  },
  blender: { name: "BLENDER", category: "3D MODELING / SCULPTING" },
  "r3f-threejs": {
    name: "R3F / THREE.JS",
    category: "3D WEB / CREATIVE CODING",
  },
  "after-effects": { name: "AFTER EFFECTS", category: "MOTION DESIGN" },
  "google-stitch": { name: "GOOGLE STITCH", category: "DESIGN PROTOTYPIN" },
  "google-ai-studio": { name: "GOOGLE AI STUDIO", category: "WEB PROTOTYPING" },
  "ai-designer": { name: "AI DESIGNER", category: "DESIGN PROTOTYPING" },
  v0: { name: "V0", category: "WEBGL PROTOTYPING" },
  "adobe-firefly": { name: "ADOBE FIREFLY", category: "GENERATIVE AI" },
  "photoshop-illustrator": {
    name: "PHOTOSHOP / ILLUSTRATOR",
    category: "DESIGN & ILLUSTRATION",
  },
  meshy: { name: "MESHY", category: "AI 3D MODELS & TEXTURE" },
  figma: { name: "FIGMA", category: "UI / PRODUCT DESIGN" },
  glsl: { name: "GLSL", category: "SHADER PROGRAMMING" },
  spline: { name: "SPLINE", category: "3D DESIGN / WEB" },
  postgresql: { name: "POSTGRESQL", category: "DATABASE" },
  openframeworks: {
    name: "OPENFRAMEWORKS / C++",
    category: "GENERATIVE SYSTEMS",
  },
  "touch-designer": { name: "TOUCH DESIGNER", category: "REAL-TIME VISUALS" },
  unity: { name: "UNITY", category: "GAME ENGINE" },
  "visual-storytelling": {
    name: "VISUAL STORYTELLING",
    category: "DESIGN & MOTION",
  },
  "stable-diffusion": { name: "STABLE DIFFUSION", category: "GENERATIVE AI" },
  "unreal-blueprints": {
    name: "UNREAL ENGINE",
    category: "SCRIPTING / AUTOMATION",
  },
  "niagara-system": {
    name: "NIAGARA SYSTEM",
    category: "VFX / PARTICLE SYSTEMS",
  },
  "environment-dev": {
    name: "ENVIRONMENTS",
    category: "3D / WORLD BUILDING",
  },
};

export function buildSkillsList(keys: string[]): Skill[] {
  return keys.map((key, i) => ({
    id: String(i + 1).padStart(3, "0"),
    ...SKILLS_REGISTRY[key],
  }));
}
