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
  { ...PROJECTS["thought-box"], id: "002" },
  { ...PROJECTS["momimsafe"], id: "003" },
];

const supportiveWorks = [
  PROJECTS["supersynthesis"],
  PROJECTS["liarbirds"],
  PROJECTS["lost-passage"],
];

const skills = buildSkillsList([
  "react-react-native",
  "nodejs",
  "r3f-threejs",
  "figma",
  "postgresql",
  "blender",
  "python",
  "photoshop-illustrator",
  "openai-sdk",
  "claude-code",
  "adobe-firefly",
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

      <PortfolioNavbar onNavigate={handleNavigate} />

      <main className="w-[100dvw] h-[100dvh] overflow-x-hidden overflow-y-scroll select-none overscroll-none bg-black">
        {/* Hero Section */}
        <div ref={heroRef}>
          <HeroSection
            id="hero"
            quoteBefore="Crafting"
            quoteHighlight="beautiful"
            quoteAfter="web experiences with engineering precision."
            bioParagraphs={[
              "Amay Kataria is a Frontend Engineer with an emphasis on design sensibility. With 5 years of software engineering experience at Microsoft and an MFA in Art & Technology, he builds performant, scalable web applications with React, Next.js, and TypeScript while maintaining exceptional aesthetic and user-centered design principles.",
              "His unique approach combines engineering rigor with a deep understanding of visual design, typography, layout, and interaction patterns. From pixel-perfect implementations to thoughtful micro-interactions, he creates interfaces that are both technically robust and visually compelling. His expertise spans responsive design systems, state management architecture, and crafting delightful user experiences.",
              "This intersection of design and engineering enables Kataria to bridge the gap between designers and engineers, translating design vision into production-ready code while contributing meaningfully to design decisions. His work has been exhibited at Ars Electronica, Vector Festival, and other international venues. He holds an MFA from the School of the Art Institute of Chicago and a Bachelor's in Computer Engineering from Virginia Tech.",
            ]}
            primaryFocus="REACT/NEXT.JS/TYPESCRIPT"
            secondaryLabel="EMPHASIS"
            secondaryValue="DESIGN SENSIBILITY"
          />
        </div>

        {/* Works Section */}
        <div ref={worksRef}>
          <WorksSection id="works" onNavigate={handleNavigate} works={works} supportiveWorks={supportiveWorks} />
        </div>

        {/* Tech Stack Section */}
        <div ref={techStackRef}>
          <TechStackSection id="techstack" skills={skills} onNavigate={handleNavigate} />
        </div>

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactSection id="contact" />
        </div>
      </main>
    </div>
  );
}
