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
              "Amay Kataria is a Web Engineer specializing in interactive 3D web experiences. With 5 years of software engineering experience at Microsoft and an MFA in Art & Technology, he creates browser-based applications that push the boundaries of what's possible with modern web technologies, WebGL, and real-time rendering.",
              "His expertise spans Three.js, React Three Fiber, and WebGL development, building performant 3D experiences that run seamlessly in the browser. From interactive visualizations to immersive web applications, he architects scalable solutions that combine cutting-edge graphics programming with solid web engineering fundamentals.",
              "Kataria's work demonstrates how web technologies can deliver compelling 3D experiences without plugins or downloads. His projects have been exhibited at Ars Electronica, Vector Festival, and other international venues. He holds an MFA from the School of the Art Institute of Chicago and a Bachelor's in Computer Engineering from Virginia Tech.",
            ]}
            primaryFocus="WEBGL/THREE.JS"
            secondaryValue="INTERACTIVE 3D WEB"
          />
        </div>

        {/* Works Section */}
        <div ref={worksRef}>
          <WorksSection id="works" onNavigate={handleNavigate} />
        </div>

        {/* Tech Stack Section */}
        <div ref={techStackRef}>
          <TechStackSection id="techstack" />
        </div>

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactSection id="contact" />
        </div>
      </main>
    </div>
  );
}
