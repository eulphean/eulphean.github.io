'use client'

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import VideoPlayer from '../components/VideoPlayer';
import ContactForm from '../components/ContactForm';

export default function Commercial() {
  const section2Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target.querySelector('video');
            if (video) {
              video.play();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Head>
        <title>Amay Kataria - Commercial</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.png" />
        <meta property="og:image" content="./og.jpg" />
        <meta name="og:title" content="Amay Kataria - Commercial" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      
      <main className="bg-black text-white">
        {/* Section 1 */}
        <section className="h-screen flex items-center justify-center border-b border-gray-800">
          <div className="text-center max-w-4xl px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Custom Interactive Installations for Corporate and Cultural Spaces
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              I create installations where digital interactions control physical environments.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section ref={section2Ref} className="h-screen relative flex items-center justify-center border-b border-gray-800">
          <VideoPlayer 
            src='/videos/demo.mp4' 
            style="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-8">Section 2</h1>
            <p className="text-xl text-gray-300">Commercial Section Two Content</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="min-h-screen flex items-center justify-center py-16">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}