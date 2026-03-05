/*
 * Author: Amay Kataria
 * Date: 01/18/2026
 * Description: This page refers to the creative technologist portfolio
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
  { ...PROJECTS["cinefives"], id: "001" },
  { ...PROJECTS["samsara"], id: "002" },
];

const supportiveWorks = [
  PROJECTS["lost-passage"],
  PROJECTS["supersynthesis"],
  PROJECTS["thought-box"],
];

const skills = buildSkillsList([
  "claude-code",
  "python",
  "react-react-native",
  "nodejs",
  "openai-sdk",
  "stable-diffusion",
  "comfyui",
  "adobe-firefly",
  "google-ai-studio",
  "google-stitch",
  "v0",
  "ai-designer",
  "figma",
  "after-effects",
  "unreal-engine",
  "blender",
]);

export default function CreativeTech() {
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
        <title>Amay Kataria - Creative Technologist</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.png" />
        <meta property="og:image" content="./og.jpg" />
        <meta name="og:title" content="Amay Kataria - Creative Technologist" />
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
            quoteBefore="Creating custom tools for"
            quoteHighlight="novel"
            quoteAfter="workflows."
            bioParagraphs={[
              "Amay Kataria is a Creative Technologist, building AI-integrated production pipelines for real-time 3D environments. With 5 years of software engineering experience at Microsoft and an MFA in Art & Technology, he specializes in developing custom workflows that bridge AI tools with Unreal Engine, web platforms, and interactive experiences.",
              "His technical focus includes ComfyUI integration, LLM-driven applications, and Blueprint development for production automation. Recent projects demonstrate end-to-end pipeline development, from AI workflow architecture to interactive deployment.",
              "Kataria's work has been exhibited internationally at Ars Electronica, Vector Festival, and other venues. He holds an MFA from the School of the Art Institute of Chicago and a Bachelor's in Computer Engineering from Virginia Tech.",
            ]}
            primaryFocus="REAL-TIME 3D/ML"
            secondaryValue="CUSTOM AI WORKFLOWS"
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
