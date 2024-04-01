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
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta property="og:image" content="../public/og.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className='h-screen'>{children}</main>
    </div>
  );
}
