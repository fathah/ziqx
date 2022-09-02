import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import AOS from 'aos';
import "aos/dist/aos.css";

import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
useEffect(()=>{
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/616fc9f0f7c0440a591f190d/1fieapmaq';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

},[])

useEffect(() => {
  AOS.init({
    easing: "ease-out-cubic",
    once: true,
    offset: 50,
  });
}, []);


  return <Component {...pageProps} />
}

export default MyApp
