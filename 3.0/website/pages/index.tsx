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
      <div className="h-middle bg-slate-50"></div>
      <Footer />
    </Layout>
  );
}