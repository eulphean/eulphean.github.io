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
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { GA_TRACKING_ID, trackCommercialPageView } from '../utils/gtag';

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

  // Track commercial page visit
  useEffect(() => {
    trackCommercialPageView();
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
      </Head>
      
      <GoogleAnalytics ga_id={GA_TRACKING_ID} />
      
      <CommercialNavbar />
      
      <main className='w-[100dvw] h-[100dvh] overflow-x-hidden overflow-y-scroll select-none overscroll-none bg-black'>
        {/* Section 1 */}
        <section ref={section1Ref} className="h-screen flex items-center justify-center border-b border-gray-800 relative overflow-hidden">
          <div className="text-center max-w-screen-lg lg:max-w-screen-lg px-4 sm:px-8 relative z-10 w-full">
            <div className="flex justify-center mb-4 sm:mb-8">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-52 md:h-52">
                  <Headshot 
                      src="/commercial.png"
                      style="rounded-full w-full h-full object-cover"
                      width={200}
                      height={200}
                  />
                </div>
            </div>
            <h1 className="text-3xl sm:text-2xl md:text-6xl lg:text-7xl xl:text-6xl mb-1 sm:mb-6 tracking-wide font-inter font-black leading-tight min-h-[180px] sm:min-h-[200px] md:min-h-[320px] lg:min-h-[200px] flex items-center justify-center">
              <span className="text-center">
                <Typewriter 
                  text="Custom Interactive Experiences for Corporate and Cultural Spaces"
                  speed={250}
                  trigger={animationTrigger}
                  highlightWords={['Interactive', 'Corporate', 'Cultural']}
                />
              </span>
            </h1>
            <FadeIn delay={600} duration={1200} trigger={animationTrigger}>
              <p className="text-base sm:text-xl text-gray-400 italic font-helvetica">
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
        <section ref={section2Ref} className="h-screen relative flex items-center justify-center border-b border-gray-800">
          <VideoPlayer 
            src='/videos/commercial.mp4' 
            style="absolute inset-0 w-full h-full object-cover"
          />
        </section>
        {/* Section 3 */}
        <section id="how-can-i-help" className="min-h-screen flex items-center justify-center py-8 sm:py-16 px-4 bg-black">
          <ContactForm />
        </section>
        
        {/* Section 4 - Footer */}
        <section className="flex text-center items-center justify-center py-4 px-4 bg-black border-t border-gray-800">
          <Footer />
        </section>
      </main>
    </div>
  );
}