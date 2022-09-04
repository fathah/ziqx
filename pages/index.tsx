import NavBar from '../comps/NavBar';
import Footer from '../comps/Footer';
import Clients from '../comps/Clients';
import Products from '../comps/Products';
import Delivering from '../comps/Delivering';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import MetaHead from '../comps/common/MetaHead';
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const router = useRouter()
  const API_ROOT = "https://api.ziqx.in/auth/";


  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    if(query!=null && query.tok!=null && query.tok!=undefined){
      let token = query.tok as string;
      token = token.split("-")[1];
       fetch(`${API_ROOT}validateJWT.php?token=${token}`)
       .then(res=>res.json())
       .catch(err=>console.log(err)).then((res)=>{
        if(res.status=='success'){
          Cookies.set('token', token);
          router.push('/');
        }else{
          console.log('🎃 Token is invalid');
        }
       });

      
    }
  }, [router.isReady, router.query]);




  return (
  <div style={{
    backgroundImage:"url('/imgs/pattern.png')"
  }}> 
  
  <MetaHead></MetaHead>
  <NavBar/>
   


    <section className="w-full h-screen flex flex-col lg:flex-row  lg:items-center px-10 lg:px-20 xl:px-40 "
    id="topImage"
    style={{
      minHeight:"100vh",
      //backgroundImage:"url('/imgs/mainbg.jpg')",
      //backgroundColor:"#000",
      backgroundSize:"cover",
      //backgroundPosition:"center",
    }}
    >
  <div className='order-2 lg:order-1'>
  <h1 className="font-bold text-5xl md:text-6xl xl:text-7xl mt-6 lg:mt-6"
  style={{
    lineHeight:"1.1",
  }}

  data-aos="fade-up"
  data-aos-duration="1000"
  >
    Techology  is a jargon
    without <br />
    <span className="bg-yellow-400 inline-block px-2 pb-1 mt-3">Ziqx</span>
    </h1>
    <p className='mt-6 lg:w-7/12' data-aos="fade-up"
      data-aos-duration="1200"
    >
      Presenting digital solutions in a minimal & comprehensive eco-system.
    </p>
    {/* <button className="bg-yellow-400 hover:bg-yellow-500  lg:text-xl px-4 py-2 lg:py-3 rounded mt-3">Know More</button> */}
  </div>

<div className='order-1 lg:order-2 w-full flex justify-center mt-28 lg:mt-4'>
  <img src="/imgs/ziqx-side.svg" className='w-full md:w-8/12 xl:w-10/12 up-down-anim' alt="" />
</div>
 
   
    </section>
   
  
    <Products/>
    <Delivering/>
    <Clients/>
   
   <Footer/>
    </div>
  )
}
