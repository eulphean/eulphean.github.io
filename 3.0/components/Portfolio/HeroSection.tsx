"use client";

import Image from "next/image";

interface HeroSectionProps {
  id: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col bg-white pt-32 pb-16 px-8 lg:px-16 font-space-grotesk"
    >
      {/* Section Label - Above the grid */}
      <div className="max-w-7xl w-full mx-auto mb-8">
        <span className="text-blue-500 text-xs tracking-widest font-light">
          [ 01. INTRODUCTION ]
        </span>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        {/* Left Column - Cover Photo */}
        <div className="flex flex-col">
          <div className="relative w-full max-w-md h-full">
            <Image
              src="/headshot.jpg"
              alt="Amay Kataria"
              width={400}
              height={500}
              className="object-contain object-top w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Right Column - Biography */}
        <div className="flex flex-col justify-between">
          {/* Quote */}
          <div className="mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Creating custom tools for
              <br />
              <span className="text-blue-500 italic">novel</span> workflows.
            </h1>
          </div>

          {/* Bio Description */}
          <div className="space-y-6 mb-8 text-gray-600 leading-relaxed text-justify">
            <p>
              Amay Kataria is a Creative Technologist, building AI-integrated
              production pipelines for real-time 2D/3D environments. With 5
              years of software engineering experience at Microsoft and an MFA
              in Art & Technology, he specializes in developing custom workflows
              that bridge AI tools with Unreal Engine, web platforms, and
              interactive experiences.
            </p>

            <p>
              His technical focus includes ComfyUI integration, LLM-driven
              applications, and Blueprint development for production automation.
              Recent projects demonstrate end-to-end pipeline development, from
              AI workflow architecture to interactive deployment.
            </p>

            <p>
              Kataria's work has been exhibited internationally at Ars
              Electronica, Vector Festival, and other venues. He holds an MFA
              from the School of the Art Institute of Chicago and a Bachelor's
              in Computer Engineering from Virginia Tech.
            </p>
          </div>

          {/* Info Grid */}
          <div className="border-t border-gray-200 pt-4 mt-auto">
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-400 text-xs tracking-widest">
                PRIMARY FOCUS
              </span>
              <span className="text-gray-400 text-xs tracking-wide">
                REAL-TIME 2D/3D/ML
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-400 text-xs tracking-widest">
                CURRENT RESEARCH
              </span>
              <span className="text-gray-400 text-xs tracking-wide">
                CUSTOM AI WORKFLOWS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
