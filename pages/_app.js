import '../styles/globals.css'

//here is the code for get the library
import {getLibrary} from '../config/web3';
import {Web3ReactProvider} from '@web3-react/core';

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
