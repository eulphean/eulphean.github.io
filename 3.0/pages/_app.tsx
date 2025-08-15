import '../styles/global.css';
import { AppProps } from 'next/app';
import { Abril_Fatface, Inter } from 'next/font/google';

const abrilFatface = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abril-fatface',
});

const inter = Inter({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${abrilFatface.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
