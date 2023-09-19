import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>BJCDevelop IT</title>
        <meta name="description" content="BJCDevelop IT" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <meta property="og:title" content="BJCDevelop IT" />
        <meta property="og:description" content="BJCDevelop IT" />
        <meta property="og:image" content="https://bjcdevelop.it/images/og-image.png" />
        <meta property="og:url" content="https://bjcdevelop.it" />
        <meta property="og:type" content="website" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
