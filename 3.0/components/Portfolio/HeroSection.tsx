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
              You cannot drift to the
              <br />
              <span className="text-blue-500 italic">top</span> of the mountain.
            </h1>
          </div>

          {/* Bio Description */}
          <div className="space-y-6 mb-8 text-gray-600 leading-relaxed text-justify">
            <p>
              Amay Kataria is a new media artist and creative technologist based
              in Chicago. His work investigates the emergent properties of
              complex systems, translating algorithms into immersive visual
              experiences.
            </p>
            <p>
              With a background in computational architecture, Amay creates
              digital sculptures that exist on the boundary of the physical and
              the virtual, often utilizing VR, AR, and projection mapping.
            </p>
          </div>

          {/* Info Grid */}
          <div className="border-t border-gray-200 pt-4 mt-auto">
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-400 text-xs tracking-widest">
                PRIMARY FOCUS
              </span>
              <span className="text-gray-400 text-xs tracking-wide">
                REAL-TIME RENDERING / ML
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-400 text-xs tracking-widest">
                CURRENT RESEARCH
              </span>
              <span className="text-gray-400 text-xs tracking-wide">
                LATENT SPACE NAVIGATION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
