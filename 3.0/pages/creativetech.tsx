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

      <PortfolioNavbar onNavigate={handleNavigate} />

      <main className="w-[100dvw] h-[100dvh] overflow-x-hidden overflow-y-scroll select-none overscroll-none bg-black">
        {/* Hero Section */}
        <div ref={heroRef}>
          <HeroSection id="hero" />
        </div>

        {/* Tech Stack Section */}
        <div ref={techStackRef}>
          <TechStackSection id="techstack" />
        </div>

        {/* Works Section */}
        <div ref={worksRef}>
          <WorksSection id="works" onNavigate={handleNavigate} />
        </div>

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactSection id="contact" />
        </div>
      </main>
    </div>
  );
}
