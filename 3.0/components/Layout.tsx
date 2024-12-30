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
        <link rel="shortcut icon" type="image/png" href ="./favicon.png"/> 
        <meta property="og:image" content="./og.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className='h-[100dvh] overflow-hidden fixed inset-0'>{children}</main>
    </div>
  );
}
