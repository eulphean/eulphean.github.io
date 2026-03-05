export interface Project {
  key: string;
  name: string;
  tags: string;
  slug?: string; // internal Next.js route: /projects/[slug]
  url?: string; // external link
}

export const PROJECTS: Record<string, Project> = {
  cinefives: {
    key: "cinefives",
    slug: "cinefives",
    name: "CINE FIVES",
    tags: "AI Recommendation Engine / LLM-Driven Web App / 2026",
  },
  samsara: {
    key: "samsara",
    slug: "samsara",
    name: "SAMSARA",
    tags: "Monumental AI Installation / Unreal & ComfyUI / 2025",
  },
  "lost-passage": {
    key: "lost-passage",
    url: "https://heyzine.com/flip-book/4de502f636.html",
    name: "THE LOST PASSAGE",
    tags: "Real-Time 3D / GPGPU Simulation / 2021",
  },
  supersynthesis: {
    key: "supersynthesis",
    url: "https://heyzine.com/flip-book/742e1cf63f.html",
    name: "SUPERSYNTHESIS",
    tags: "Real-time Audio-Visual / Installation / 2022-2023",
  },
  "thought-box": {
    key: "thought-box",
    url: "https://heyzine.com/flip-book/5c437e7b22.html",
    name: "THOUGHT BOX",
    tags: "3D Web Character / Creative Workflow / 2023",
  },
  "whale-watchers": {
    key: "whale-watchers",
    url: "https://heyzine.com/flip-book/d30ff60168.html",
    name: "WHALE WATCHERS",
    tags: "Real-Time 3D Web / Data Visualization / 2023",
  },
  liarbirds: {
    key: "liarbirds",
    url: "https://heyzine.com/flip-book/01107b4891.html",
    name: "LIARBIRDS",
    tags: "Interactive AR Filter / Javascript / 2022",
  },
  momimsafe: {
    key: "momimsafe",
    url: "https://heyzine.com/flip-book/33cfe8bb83.html",
    name: "MOMIMSAFE",
    tags: "Interactive Web / React / 2020-Present",
  },
  "shadows-of-time": {
    key: "shadows-of-time",
    url: "https://heyzine.com/flip-book/ed60cf3a9c.html",
    name: "SHADOWS OF TIME",
    tags: "Immersive Video / Unreal Engine / 2024",
  },
  timekeepers: {
    key: "timekeepers",
    url: "https://heyzine.com/flip-book/bb9a55a166.html",
    name: "TIMEKEEPERS",
    tags: "Interactive Virtual Reality / Unity Social VR / 2020-2022",
  },
};
