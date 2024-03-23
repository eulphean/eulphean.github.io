import Head from 'next/head';
export const siteTitle = 'Amay Kataria 3.0';

type LayoutProps = {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({children,home}: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <link rel="preload" as="fetch" href="https://prod.spline.design/cVX19QaRpag1IL1y/scene.splinecode" />
        <link rel="preload" as="fetch" href="https://prod.spline.design/yGk2E1zv7eJLo0aO/scene.splinecode" /> */}
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className='m-8 relative'>{children}</main>
    </div>
  );
}
