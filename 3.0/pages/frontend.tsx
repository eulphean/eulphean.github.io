/*
 * Author: Amay Kataria
 * Date: 03/05/2026
 * Description: This page refers to the frontend engineer portfolio
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
  { ...PROJECTS["momimsafe"], id: "002" },
  { ...PROJECTS["thought-box"], id: "003" },
];

const supportiveWorks = [
  PROJECTS["supersynthesis"],
  PROJECTS["whale-watchers"],
  PROJECTS["lost-passage"],
];

const skills = buildSkillsList([
  "claude-code",
  "nextjs",
  "react-react-native",
  "r3f-threejs",
  "openai-sdk",
  "figma",
  "google-stitch",
  "v0",
  "nodejs",
  "supabase",
  "postgresql",
  "aws-azure",
  "glsl",
  "google-ai-studio",
  "python",
  "photoshop-illustrator",
]);

export default function FrontendEngineer() {
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
        <title>Amay Kataria - Frontend Engineer</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.png" />
        <meta property="og:image" content="./og.jpg" />
        <meta name="og:title" content="Amay Kataria - Frontend Engineer" />
        <meta
          name="og:description"
          content="Building performant, scalable web applications with React, Next.js, and TypeScript. 5 years of software engineering experience at Microsoft."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>

      <MobileWarningModal />

      <PortfolioNavbar
        onNavigate={handleNavigate}
        title={"FRONTEND ENGINEER"}
      />

      <main className="w-[100dvw] h-[100dvh] overflow-x-hidden overflow-y-scroll select-none overscroll-none bg-black">
        {/* Hero Section */}
        <div ref={heroRef}>
          <HeroSection
            id="hero"
            quoteBefore="Crafting"
            quoteHighlight="novel"
            quoteAfter="web experiences with engineering precision."
            bioParagraphs={[
              "Amay Kataria is a Frontend Engineer focused on the intersection of design and accessibility. With 5 years of engineering experience at Microsoft and an MFA in Art & Technology, he builds scalable web applications using React, Next.js, and TypeScript, prioritizing high-performance code.",
              "He specializes in creating responsive design systems and accessible interfaces, orchestrating Claude Code agents to accelerate the protoyping of web applications with aesthetic precision.",
              "His work has been exhibited at Ars Electronica and Vector Festival. He holds an MFA from the School of the Art Institute of Chicago and a Bachelor’s in Computer Engineering from Virginia Tech.",
            ]}
            primaryFocus="REACT / NEXT.JS / PROTOTYPING"
            secondaryValue="AGENTIC WORKFLOWS"
          />
        </div>

        {/* Works Section */}
        <div ref={worksRef}>
          <WorksSection
            id="works"
            portfolioId="frontend"
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
            resumeHref="/portfolios/Amay Kataria Frontend (March 2026).pdf"
            resumeFilename="Amay Kataria Frontend (March 2026).pdf"
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
