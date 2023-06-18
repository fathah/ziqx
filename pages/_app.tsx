import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import type { AppProps } from 'next/app'


import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {




useEffect(() => {
  AOS.init({
    easing: "ease-out-cubic",
    once: true,
    offset: 50,
  });
}, []);

//div data-theme="ziqxTheme"><Component {...pageProps} /></div> 
  return   <Component {...pageProps} />
}

export default MyApp
