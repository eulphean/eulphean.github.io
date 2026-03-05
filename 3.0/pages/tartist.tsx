/*
 * Author: Amay Kataria
 * Date: 03/05/2026
 * Description: This page refers to the technical artist portfolio
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
  { ...PROJECTS["samsara"], id: "001" },
  { ...PROJECTS["shadows-of-time"], id: "002" },
];

const supportiveWorks = [
  PROJECTS["lost-passage"],
  PROJECTS["timekeepers"],
];

const skills = buildSkillsList([
  "unreal-blueprints",
  "niagara-system",
  "environment-dev",
  "blender",
  "python",
  "comfyui",
  "after-effects",
  "glsl",
  "photoshop-illustrator",
  "openframeworks",
  "touch-designer",
  "unity",
  "visual-storytelling",
  "stable-diffusion",
]);

export default function TechnicalArtist() {
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
        <title>Amay Kataria - Technical Artist</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.png" />
        <meta property="og:image" content="./og.jpg" />
        <meta name="og:title" content="Amay Kataria - Technical Artist" />
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
            quoteBefore="Bridging"
            quoteHighlight="art"
            quoteAfter="and technology through intelligent workflows."
            bioParagraphs={[
              "Amay Kataria is a Technical Artist specializing in production pipeline development for real-time 3D environments. With 5 years of software engineering experience at Microsoft and an MFA in Art & Technology, he bridges the gap between artistic vision and technical execution, creating efficient, artist-friendly workflows that empower creative teams.",
              "His expertise spans shader development in HLSL and MaterialX, procedural generation systems in Houdini, and tool creation using Python and Blueprint scripting. He excels at optimizing real-time rendering pipelines in Unreal Engine, developing custom plugins, and automating repetitive tasks to maximize artistic iteration speed.",
              "Kataria's work demonstrates a deep understanding of both the artistic process and technical constraints, enabling him to design solutions that enhance creativity rather than restrict it. His projects have been exhibited at Ars Electronica, Vector Festival, and other international venues. He holds an MFA from the School of the Art Institute of Chicago and a Bachelor's in Computer Engineering from Virginia Tech.",
            ]}
            primaryFocus="PIPELINE & TOOLING"
            secondaryLabel="CORE EXPERTISE"
            secondaryValue="SHADERS/PROCEDURAL/UNREAL"
          />
        </div>

        {/* Works Section */}
        <div ref={worksRef}>
          <WorksSection id="works" onNavigate={handleNavigate} works={works} supportiveWorks={supportiveWorks} />
        </div>

        {/* Tech Stack Section */}
        <div ref={techStackRef}>
          <TechStackSection id="techstack" skills={skills} />
        </div>

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactSection id="contact" />
        </div>
      </main>
    </div>
  );
}
