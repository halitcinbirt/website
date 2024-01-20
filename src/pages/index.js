import Desktop from '@/components/desktop'
import Toolbar from '@/components/toolbar'
import Dock from '@/components/dock'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Halit Cınbırt's portfolio website</title>
        <meta name="description" content="Halit Cınbırt's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Toolbar />
        <Desktop />
        <Dock />
      </main>
    </>
  )
}
