/*
 * Author: Amay Kataria
 * Date: 03/05/2026
 * Description: This page refers to the web engineering portfolio with focus on 3D and interactive experiences
 */

"use client";

import { useRef } from "react";
import Head from "next/head";
import PortfolioNavbar from "../components/Portfolio/PortfolioNavbar";
import HeroSection from "../components/Portfolio/HeroSection";
import TechStackSection from "../components/Portfolio/TechStackSection";
import WorksSection from "../components/Portfolio/WorksSection";
import ContactSection from "../components/Portfolio/ContactSection";
import MobileWarningModal from "../components/Portfolio/MobileWarningModal";
import { PROJECTS } from "../lib/projects";
import { buildSkillsList } from "../lib/skills";

const works = [
  { ...PROJECTS["lost-passage"], id: "001" },
  { ...PROJECTS["thought-box"], id: "002" },
  { ...PROJECTS["whale-watchers"], id: "003" },
];

const supportiveWorks = [
  PROJECTS["samsara"],
  PROJECTS["supersynthesis"],
  PROJECTS["liarbirds"],
  PROJECTS["vibeblobs"],
];

const skills = buildSkillsList([
  "claude-code",
  "r3f-threejs",
  "react-react-native",
  "python",
  "glsl",
  "spline",
  "unreal-engine",
  "blender",
  "figma",
  "v0",
  "google-ai-studio",
  "google-stitch",
  "nodejs",
  "supabase",
  "postgresql",
]);

export default function WebEngineering3D() {
  const heroRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (sectionId: string) => {
    const refMap: Record<string, React.RefObject<HTMLDivElement>> = {
      hero: heroRef,
      techstack: techStackRef,
      works: worksRef,
      contact: contactRef,
    };

    const targetRef = refMap[sectionId];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Amay Kataria - Web Engineering 3D</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.png" />
        <meta property="og:image" content="./og.jpg" />
        <meta name="og:title" content="Amay Kataria - Web Engineering 3D" />
        <meta
          name="description"
          content="Web Engineer specializing in interactive 3D web experiences with WebGL, Three.js, and modern web technologies. Building immersive browser-based applications."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>

      <MobileWarningModal />

      <PortfolioNavbar onNavigate={handleNavigate} />

      <main className="w-[100dvw] h-[100dvh] overflow-x-hidden overflow-y-scroll select-none overscroll-none bg-black">
        {/* Hero Section */}
        <div ref={heroRef}>
          <HeroSection
            id="hero"
            quoteBefore="Building immersive"
            quoteHighlight="3D web"
            quoteAfter="experiences in the browser."
            bioParagraphs={[
              "Amay Kataria is a 3D Web Engineer specializing in real-time interactive experiences and procedural environments. With 5 years of software engineering experience at Microsoft and an MFA in Art & Technology, he builds browser-based applications that combine performance optimization, shader programming, and compelling visual storytelling.",
              "His expertise spans Three.js, React Three Fiber, and WebGL development, from architecting pipelines that bring Blender assets to the web to building procedural 3D systems that generate dynamic environments at runtime. He optimizes for performance without sacrificing visual quality, creating immersive experiences that run seamlessly across devices.",
              "Kataria's work has been exhibited at Ars Electronica, Vector Festival, and other international venues. He holds an MFA from the School of the Art Institute of Chicago and a Bachelor's in Computer Engineering from Virginia Tech.",
            ]}
            primaryFocus="WEBGL / THREE.JS"
            secondaryValue="PROCEDURAL WORLDBUILDING"
          />
        </div>

        {/* Works Section */}
        <div ref={worksRef}>
          <WorksSection
            id="works"
            onNavigate={handleNavigate}
            works={works}
            supportiveWorks={supportiveWorks}
          />
        </div>

        {/* Tech Stack Section */}
        <div ref={techStackRef}>
          <TechStackSection
            id="techstack"
            skills={skills}
            onNavigate={handleNavigate}
          />
        </div>

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactSection id="contact" />
        </div>
      </main>
    </div>
  );
}
