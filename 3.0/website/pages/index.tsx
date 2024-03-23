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
      <Navbar />
      <div className='grid w-full absolute grid-cols-1 md:grid-cols-2 mt-12'>
        <div className='flex flex-col order-last md:order-first md:mt-48'>
          <Building />
          <Signup />
        </div>
        <Room showRoom={showRoom} />
      </div>
      {/* <Footer /> */}
    </Layout>
  );
}