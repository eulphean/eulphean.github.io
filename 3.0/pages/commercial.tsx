'use client'

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import VideoPlayer from '../components/VideoPlayer';
import ContactForm from '../components/ContactForm';
import Typewriter from '../components/Typewriter';
import FadeIn from '../components/FadeIn';
import HighlightableText from '../components/HighlightableText';
import Headshot from '../components/Headshot';
import CommercialNavbar from '../components/CommercialNavbar';

export default function Commercial() {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === section1Ref.current && entry.isIntersecting) {
            // Reset and trigger animations for Section 1
            setAnimationTrigger(false);
            setTimeout(() => setAnimationTrigger(true), 100);
          }
          
          if (entry.target === section2Ref.current && entry.isIntersecting) {
            const video = entry.target.querySelector('video');
            if (video) {
              video.currentTime = 0; // Reset video to beginning
              video.play();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section1Ref.current) {
      observer.observe(section1Ref.current);
    }
    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Amay Kataria - Commercial</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.png" />
        <meta property="og:image" content="./og.jpg" />
        <meta name="og:title" content="Amay Kataria - Commercial" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <style jsx global>{`
          html, body {
            overflow-x: hidden;
          }
        `}</style>
      </Head>
      
      <CommercialNavbar />
      
      <main className="bg-black text-white overflow-x-hidden">
        {/* Section 1 */}
        <section ref={section1Ref} className="h-screen flex items-center justify-center border-b border-gray-800 relative overflow-hidden">
          <div className="text-center max-w-screen-lg lg:max-w-screen-lg px-4 sm:px-8 relative z-10 w-full">
            <div className="flex justify-center mb-8">
                <Headshot 
                    src="/commercial.png"
                    style="rounded-full"
                    width={200}
                    height={200}
                />
            </div>
            <h1 className="text-3xl sm:text-2xl md:text-6xl lg:text-7xl xl:text-6xl mb-6 tracking-wide font-inter font-black leading-tight">
              <Typewriter 
                text="Custom Interactive Experiences for Corporate and Cultural Spaces"
                speed={250}
                trigger={animationTrigger}
                highlightWords={['Interactive', 'Corporate', 'Cultural']}
              />
            </h1>
            <FadeIn delay={600} duration={1200} trigger={animationTrigger}>
              <p className="text-lg sm:text-xl text-gray-400 italic font-helvetica">
                <HighlightableText 
                  text="I create installations where digital interactions control physical environments."
                  highlightWords={[]}
                  animationDelay={1000}
                />
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 2 */}
        <section ref={section2Ref} className="h-screen relative flex items-center justify-center border-b border-gray-800 overflow-hidden">
          <VideoPlayer 
            src='/videos/demo.mp4' 
            style="absolute inset-0 w-full h-full object-cover"
          />
        </section>
        {/* Section 3 */}
        <section className="min-h-screen flex items-center justify-center py-8 sm:py-16 px-4 overflow-hidden">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}