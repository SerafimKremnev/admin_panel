import type { AppProps } from 'next/app'
import Head from "next/head";
import '../styles/globals.css'
import cn from 'classnames'

import { useRemResize } from '../hooks/useRemResize';
import LayoutApp from "../components/other/LayoutApp/LayoutApp";


function MyApp({ Component, pageProps, ...rest }: AppProps) {
  useRemResize()
  return (
    <>
      <Head>
        <title>OxemManage</title>
        <meta charSet="UTF-8"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"use-credentials"}/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <div className={cn('page-layout')}>
          <main className="main">
              <Component {...pageProps} />
          </main>
      </div>
      <script async type="text/javascript" dangerouslySetInnerHTML={{
        __html: `const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
        window.addEventListener('resize', () => {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', vh + 'px');
        });`}}>
      </script>
    </>
  )
}

export default MyApp;