export interface Project {
  key: string;
  name: string;
  tags: string;
  slug?: string;   // internal Next.js route: /projects/[slug]
  url?: string;    // external link
}

export const PROJECTS: Record<string, Project> = {
  cinefives: {
    key: "cinefives",
    slug: "cinefives",
    name: "CINE FIVES",
    tags: "AI Recommendation Engine / Web App / 2026",
  },
  samsara: {
    key: "samsara",
    slug: "samsara",
    name: "SAMSARA",
    tags: "Monumental AI Installation / Video / 2025",
  },
  "lost-passage": {
    key: "lost-passage",
    url: "",
    name: "THE LOST PASSAGE",
    tags: "Interactive 3D Web Experience / 2024",
  },
  supersynthesis: {
    key: "supersynthesis",
    url: "",
    name: "SUPERSYNTHESIS",
    tags: "Generative Audio-Visual / Installation / 2023",
  },
  "thought-box": {
    key: "thought-box",
    url: "",
    name: "THOUGHT BOX",
    tags: "LLM Web App / Creative Tool / 2024",
  },
  "whale-watchers": {
    key: "whale-watchers",
    url: "",
    name: "WHALE WATCHERS",
    tags: "Real-Time 3D Web / Data Visualization / 2023",
  },
  liarbirds: {
    key: "liarbirds",
    url: "",
    name: "LIARBIRDS",
    tags: "Generative Art / Creative Coding / 2022",
  },
  momimsafe: {
    key: "momimsafe",
    url: "",
    name: "MOMIMSAFE",
    tags: "Safety Web App / React / 2023",
  },
  "shadows-of-time": {
    key: "shadows-of-time",
    url: "",
    name: "SHADOWS OF TIME",
    tags: "Immersive Installation / Unreal Engine / 2024",
  },
  timekeepers: {
    key: "timekeepers",
    url: "",
    name: "TIMEKEEPERS",
    tags: "Interactive Installation / Physical Computing / 2022",
  },
};
