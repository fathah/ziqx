import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import type { AppProps } from 'next/app'


import { useEffect } from 'react'
import { getConnectionsCloud } from '../functions/connections/get';
import { isLogged } from '../functions/isLogged';
import ConnectionsModal from '../comps/user/ConnectionsModal';
import { ConnectionContextProvider } from '@/context/ConnectionContext';

function MyApp({ Component, pageProps }: AppProps) {

// useEffect(() => {
  
// if(isLogged()){
//   getConnectionsCloud();
// }
  
// },[])

useEffect(() => {
  AOS.init({
    easing: "ease-out-cubic",
    once: true,
    offset: 50,
  });
}, []);


  return   <div data-theme="ziqxTheme">
    <ConnectionContextProvider>
    <Component {...pageProps} /> <ConnectionsModal/>
    </ConnectionContextProvider>
    </div> 
}

export default MyApp
