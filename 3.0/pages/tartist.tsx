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
  { ...PROJECTS["thought-box"], id: "003" },
];

const supportiveWorks = [
  PROJECTS["lost-passage"],
  PROJECTS["supersynthesis"],
  PROJECTS["timekeepers"],
];

const skills = buildSkillsList([
  "unreal-blueprints",
  "blender",
  "unity",
  "python",
  "meshy",
  "comfyui",
  "stable-diffusion",
  "adobe-firefly",
  "niagara-system",
  "environment-dev",
  "after-effects",
  "photoshop-illustrator",
  "r3f-threejs",
  "openframeworks",
  "touch-designer",
  "glsl",
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
            quoteHighlight="3D art"
            quoteAfter="with technology."
            bioParagraphs={[
              "Amay Kataria is a Technical Artist building optimized production pipelines for real-time 3D environments. With 5 years of software engineering at Microsoft and an MFA in Art & Technology, he bridges artistic vision and technical execution through efficient, artist-friendly workflows that maximize speed.",
              "He specializes in shader development, performance profiling, and automating complex tasks via Python and Blueprints. Kataria excels at integrating AI/ML models into creative pipelines, leveraging machine learning to streamline asset generation and automate labor-intensive processes without sacrificing visual quality.",
              "Kataria's projects have been exhibited at Ars Electronica and Vector Festival, and other venues. He holds an MFA from the School of the Art Institute of Chicago and a BS in Computer Engineering from Virginia Tech.",
            ]}
            primaryFocus="PIPELINE & TOOLING"
            secondaryValue="AI / ML INTEGRATION"
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
