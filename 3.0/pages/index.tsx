'use client'

import { useState } from 'react';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Intro from '../components/Intro'
import VideoPlayer from '../components/VideoPlayer';
import Popup, {PopupContentType} from '../components/Popup';
import About from '../components/About';
import Statement from '../components/Statement';

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
    <Layout>
      <Intro onEnter={() => setShowRoom(true)} />
      <VideoPlayer 
        src='/videos/teaser.mp4' 
        style="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
      />
      <div className='flex items-center justify-center w-full h-full z-10'>
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
      {/* <div className="h-bottom flex items-center justify-center">
        <Footer />
      </div> */}
    </Layout>
  );
}