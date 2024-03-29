'use client'

import { useState } from 'react';
import Room from '../components/Room';
import Building from '../components/Building';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import Footer from '../components/Footer';
import Intro from '../components/Intro'
import CursorFollower from '../components/CursorFollower';

// These props can be filled using staticProps on the server.
type HomeProps = {}
export default function Home(props: HomeProps) {
  const [showRoom, setShowRoom] = useState(false);
  return (
    <Layout>
      {/* <CursorFollower /> */}
      <Intro onEnter={() => setShowRoom(true)} />
        <div className='flex items-center w-full h-top'>
          <Navbar />
        </div>
        <div className="flex flex-col w-full items-center justify-evenly h-middle lg:flex-row">
            <Room showRoom={showRoom} />
            <div className='flex flex-col items-center px-4 grow content-evenly justify-evenly lg:justify-center lg:gap-12 lg:order-first lg:w-1/2'>
              <Building />
              <Signup />
            </div>
        </div>
        <div className="h-bottom flex items-center justify-center">
          <Footer />
        </div>
    </Layout>
  );
}