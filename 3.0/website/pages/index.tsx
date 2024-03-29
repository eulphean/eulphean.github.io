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
      <div className="flex items-center flex-col px-8 justify-evenly h-middle">
        <Room showRoom={showRoom} />
        <Building />
        <Signup />
      </div>
      <div className="h-bottom flex items-center justify-center">
        <Footer />
      </div>
    </Layout>
  );
}