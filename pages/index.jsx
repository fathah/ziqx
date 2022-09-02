import Head from 'next/head'
import NavBar from '../comps/NavBar';
import Footer from '../comps/Footer';
import Clients from '../comps/Clients';
import Products from '../comps/Products';
import Delivering from '../comps/Delivering';
import { useEffect } from 'react';

export default function Home() {

  // useEffect(() => {
  // document.addEventListener('mousemove', (e)=>{
  //   const x = e.clientX;
  //   const y = e.clientY;
  //   document.getElementById('robot').style.transform = `translate(${x/10}px, ${y/10}px)`;
  // });
 
  // }, []);
  
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
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

  </Head>
  <NavBar/>
   


    <section className="w-full h-screen flex  lg:items-center"
    style={{
      minHeight:"100vh",
      backgroundImage:"url('/imgs/mainbg.jpg')",
      //backgroundColor:"#000",
      backgroundSize:"cover",
      backgroundPosition:"center",
    }}
    >
    {/* <div className="grid grid-cols-1 content-center  md:order-2">
    <Lottie animationData={robot} id="robot" className="w-10/12 mt-28" />
    </div> */}
    
   
  
  <h1 className="font-bold text-4xl lg:text-5xl xl:text-7xl mx-10 lg:mx-20  mt-32"
  data-aos="fade-up"
  data-aos-duration="1000"
  >
     Welcome to the  <br />next gen <br /> creative <br />planet
    </h1>
  {/* <a 
  className="text-gray-400 inline-block mt-2" 
  href="mailto:info@ziqx.in">info@ziqx.in</a> */}
 
   
    </section>
   
  
    <Products/>
    <Delivering/>
    <Clients/>
   
   <Footer/>
    </div>
  )
}
