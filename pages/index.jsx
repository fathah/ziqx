import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Lottie from "lottie-react";
import robot from "../asset/robot.json";
import Logo from '../comps/Logo';
import Footer from '../comps/Footer';
import MainLayout from '../comps/Layouts/MainLayout';

export default function Home() {
  
  return (
  <> 
  
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
    <MainLayout>
  
    <section className="lg:flex"
    style={{
      height:"95vh"
    }}
    >
    <div className="flex justify-center lg:order-2">
    <Lottie animationData={robot} className="w-10/12 mt-28" />
    </div>
    
   <div className="flex justify-center items-center lg:order-1">
  <section>
  <h1 className="font-bold text-5xl lg:text-7xl">
      Bridging the <span className="text-yellow-500">next generation</span> solutions
    </h1>
  <a 
  className="text-gray-400 inline-block mt-2" 
  href="mailto:info@ziqx.in">info@ziqx.in</a>
  </section>
   </div>
    </section>
    </MainLayout>
   <Footer/>
    </>
  )
}
