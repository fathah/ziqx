import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Lottie from "lottie-react";
import robot from "../asset/robot.json";
import Logo from '../comps/Logo';
import Footer from '../comps/Footer';
import Clients from '../comps/Clients';
import Products from '../comps/Products';
import Delivering from '../comps/Delivering';

import MainLayout from '../comps/Layouts/MainLayout';
import { useEffect } from 'react';

export default function Home() {

  
  return (
  <div style={{
    backgroundImage:"url('/imgs/pattern.png')"
  }}> 
  
  <Head>
  <title>Ziqx Creative Planet</title>
<meta name="title" content="Ziqx Creative Planet"/>
<meta name="description" content="We blend insights and strategy to create digital products for forward-thinking organizations."/>


<meta property="og:type" content="website"/>
<meta property="og:url" content="https://ziqx.in/"/>
<meta property="og:title" content="Ziqx Creative Planet"/>
<meta property="og:image" content="https://ziqx.in/meta/thumb.png"/>

  </Head>
  <Logo/>
   


    <section className="md:grid grid-cols-2 px-14 md:px-24 lg:px-40 "
    style={{
      minHeight:"100vh",
      backgroundImage:"url('/imgs/mainbg.jpg')",
      backgroundSize:"cover",
    }}
    >
    <div className="grid grid-cols-1 content-center  md:order-2">
    <Lottie animationData={robot} className="w-10/12 mt-28" />
    </div>
    
   <div className="grid content-end  lg:order-1 mb-32">
  <section>
  <h1 className="font-bold text-4xl lg:text-5xl xl:text-7xl"

  >
      Bridging with the <span 
      // className="text-yellow-400"
      >next generation</span> solutions
    </h1>
  {/* <a 
  className="text-gray-400 inline-block mt-2" 
  href="mailto:info@ziqx.in">info@ziqx.in</a> */}
  </section>
   </div>
    </section>
   
  
    <Products/>
    <Delivering/>
    <Clients/>
   
   <Footer/>
    </div>
  )
}
