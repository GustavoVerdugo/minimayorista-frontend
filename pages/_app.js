import { DataProvider } from '../src/context/DataContext';
import useFetch from '../src/helpers/useFetch';
import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-3Y832DGM3" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3Y832DGM3R', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  )
}

export default MyApp
