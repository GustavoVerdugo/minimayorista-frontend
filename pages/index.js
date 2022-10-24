import Head from 'next/head'
import Image from 'next/image'
import Announc from '../src/components/Announc'
import Banner from '../src/components/Banner'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Products from '../src/components/Products'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-white w-screen h-screen'>
      <Head>
        <title>Minimayorista | Tu despensa al costo</title>
        <meta name="description" content="Minimayorista | Tu despensa al costo" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div>
        <div className='w-screen sticky top-0 z-50'>
          <Navbar />
          <Announc />
        </div>
        <main>
          <Banner />
          <Products />
        </main>
      </div>
      <div className='mx-auto bottom-0'>
        <Footer />
      </div>
    </div>
  )
}
