import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//get hooks from web3
import {useWeb3React} from '@web3-react/core';
import {connector} from '../config/web3';
import {useEffect,useCallback} from 'react';


export default function Home() {
  const {
    activate,
    active,
    deactivate,
    account,
    error,
    chainId //chain is a number
  }=useWeb3React();

  //a simple function to connect
  const connect=useCallback(()=>{
    activate(connector);
    localStorage.setItem('previouslyConnected', true);
  },[activate])//listen de second valor that will be the callback
  //to disconnect

  const disconnect=()=>{
    deactivate();
    localStorage.removeItem('previouslyConnected');
  }

  //to ask if already is loged
  useEffect(()=>{
    if (localStorage.getItem('previouslyConnected')==='true') {
      connect();
    }
  },[connect]) //listen to connect


  if(error){
    return <p>Something is happend:<br/>{error}</p>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Conextion for Etherium</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
	<h1>Login with a wallet</h1>
	{
	  active
	    ?<>
	      <button onClick={disconnect}>
		Disconnect from the Wallet
	      </button>
	      <p>
		You are connected to {chainId} network.<br/>
		You account is:{account}
	      </p>
	     </>
	    :<button onClick={connect}>Connect to the Wallet</button>
	}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
