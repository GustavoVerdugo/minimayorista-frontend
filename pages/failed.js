import Head from 'next/head'
import Image from 'next/image'
import Announc from '../src/components/Announc'
import Banner from '../src/components/Banner'
import BrandSlider from '../src/components/BrandSlider'
import Contact from '../src/components/Contact'
import FailedPayment from '../src/components/FailedPayment'
import Footer from '../src/components/Footer'
import FormSubs from '../src/components/FormSubs'
import Loader from '../src/components/Loader'
import Navbar from '../src/components/Navbar'
import ProductsList from '../src/components/ProductsList'
import useFetch from '../src/helpers/useFetch'
import styles from '../styles/Home.module.css'

export default function Failed() {
  return (
    <div className='bg-white w-screen h-screen'>
      <Head>
        <title>Minimayorista | Tu despensa al costo</title>
        <meta name="description" content="Minimayorista | Tu despensa al costo" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />

      </Head>


      <>
        <div>
          <>
            <div className='top-0 z-50'>
              <Navbar />
            </div>
            <main className='flex flex-col justify-center relative'>
              <FailedPayment />
            </main>
          </>
        </div>
        <div className='mx-auto bottom-0'>
          <Footer />
        </div>
      </>
    </div>
  )
}
