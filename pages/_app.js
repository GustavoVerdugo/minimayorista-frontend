import { DataProvider } from '../src/context/DataContext';
import useFetch from '../src/helpers/useFetch';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
