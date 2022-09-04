import Head from 'next/head'
import NavBar from '../comps/NavBar';
import Footer from '../comps/Footer';
import Clients from '../comps/Clients';
import Products from '../comps/Products';
import Delivering from '../comps/Delivering';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Cookies from 'js-cookie'
import isLoggedHard from '../functions/isLogged';

export default function Home() {
  const router = useRouter()
  const API_ROOT = "https://api.ziqx.in/auth/";


  useEffect(async() => {
    if (!router.isReady) return;
    const query = router.query;
    if(query!=null && query.tok!=null && query.tok!=undefined){
      let token = query.tok.split("-")[1];
      const res = await fetch(`${API_ROOT}validateJWT.php?token=${token}`).then(res=>res.json()).catch(err=>console.log(err));
      if(res.status=='success'){
        Cookies.set('token', token);
      }else{
        console.log('🎃 Token is invalid');
      }
      
    }
  }, [router.isReady, router.query]);




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
<link rel="shortcut icon" href="/imgs/favicon.ico" type="image/x-icon" />

  </Head>
  <NavBar/>
   


    <section className="w-full h-screen flex  lg:items-center"
    id="topImage"
    style={{
      minHeight:"100vh",
      backgroundImage:"url('/imgs/mainbg.jpg')",
      //backgroundColor:"#000",
      backgroundSize:"cover",
      //backgroundPosition:"center",
    }}
    >
    {/* <div className="grid grid-cols-1 content-center  md:order-2">
    <Lottie animationData={robot} id="robot" className="w-10/12 mt-28" />
    </div> */}
    
   
  
  <div className='mx-10 lg:mx-20'>
  <h1 className="font-bold text-5xl lg:text-6xl xl:text-7xl   mt-32 lg:mt-6"
  style={{
    lineHeight:"1.1",
  }}

  data-aos="fade-up"
  data-aos-duration="1000"
  >
    Techology  <br />is a jargon
     <br /> without <br />
    <span className="bg-white inline-block px-2 pb-1">Ziqx</span>
    </h1>
    <p className='mt-6 lg:w-7/12' data-aos="fade-up"
      data-aos-duration="1200"
    >
      Presenting digital solutions in a minimal & comprehensive eco-system.
    </p>
    {/* <button className="bg-yellow-400 hover:bg-yellow-500  lg:text-xl px-4 py-2 lg:py-3 rounded mt-3">Know More</button> */}
  </div>
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
