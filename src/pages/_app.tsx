import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>Portafolio Gustavo Elias</title>
          <meta name="description" content="Desarrollador web, diseñador UI e Ingeniero en Ciencias de la computación." />
          <meta name="keywords" content="gustavo, elias, meza, natute" />
        </Head>

      <Component {...pageProps} />
    </>
  )
}
