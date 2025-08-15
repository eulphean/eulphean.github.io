'use client'

import Head from 'next/head';

export default function Commercial() {
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
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8">Section 1</h1>
            <p className="text-xl text-gray-300">Commercial Section One Content</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="h-screen flex items-center justify-center border-b border-gray-800">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8">Section 2</h1>
            <p className="text-xl text-gray-300">Commercial Section Two Content</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8">Section 3</h1>
            <p className="text-xl text-gray-300">Commercial Section Three Content</p>
          </div>
        </section>
      </main>
    </div>
  );
}