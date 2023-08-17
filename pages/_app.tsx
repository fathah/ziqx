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
import Script from 'next/script';

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
     <Script src="https://www.googletagmanager.com/gtag/js?id=G-PT1V8MBZDT" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-PT1V8MBZDT');
        `}
      </Script>

    <ConnectionContextProvider>
    <Component {...pageProps} /> <ConnectionsModal/>
    </ConnectionContextProvider>
    </div> 
}

export default MyApp
