'use client'

import { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Footer from '../components/Archive/Footer';
import Intro from '../components/Intro'
import VideoPlayer from '../components/VideoPlayer';
import Popup, {PopupContentType} from '../components/Popup';
import About from '../components/About';
import Statement from '../components/Statement';

export const siteTitle = 'Amay Kataria 3.0';

export default function Home() {
  const [showRoom, setShowRoom] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContentType, setPopupContentType] = useState<PopupContentType>(PopupContentType.About);

  const resolveAboutClick = () => {
    setPopupContentType(PopupContentType.About);
    setIsPopupOpen(true);
  }

  const resolveStatementClick = () => {  
    setPopupContentType(PopupContentType.Statement);
    setIsPopupOpen(true);
  }

  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel="shortcut icon" type="image/png" href ="./favicon.png"/> 
        <meta property="og:image" content="./og.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <main className='h-[100dvh] w-[100dvw]overflow-hidden fixed inset-0 touch-none select-none overscroll-none'>
        <Intro onEnter={() => setShowRoom(true)} />
        <VideoPlayer 
          src='/videos/teaser.mp4' 
          style="fixed inset-0 w-[100dvw] h-[100dvh] object-cover -z-10"
        />
        <div className='flex items-center justify-center w-[100dvw] h-[100dvh] z-10'>
          <Menu 
            onAboutClick={resolveAboutClick} 
            onStatementClick={resolveStatementClick}
          />
        </div>
        <Popup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          title={popupContentType === PopupContentType.About ? "BIO" : "STATEMENT"} 
        >
          {popupContentType === PopupContentType.About && <About />}
          {popupContentType === PopupContentType.Statement && <Statement />}
        </Popup>
      </main>
    </div>
  );
}