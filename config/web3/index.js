import web3 from 'web3';
import {InjectedConnector} from '@web3-react/injected-connector';


//to get from where is and what we gona use, in our case etherium
const EHTERIUM_NETWORK_ID=1;
export const connector=new InjectedConnector({
  //supportedChainIds:[1,2,3,4,5,42]
  //to etherium is 1
  supportedChainIds:[EHTERIUM_NETWORK_ID]
})

//get get in the code the library for use web3
//to listen always the connection with  metamask
export const getLibrary=(provider)=>{
  const library=new web3(provider);
  return library;
}
