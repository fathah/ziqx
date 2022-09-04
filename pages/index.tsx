import NavBar from '../comps/common/NavBar';
import Footer from '../comps/common/Footer';
import Clients from '../comps/Home/Clients';
import Products from '../comps/Home/Products';
import Delivering from '../comps/Home/Delivering';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import MetaHead from '../comps/common/MetaHead';
import { useRouter } from 'next/dist/client/router';
import MainSection from '../comps/Home/MainSection';
import What from '../comps/Home/What';
import BottomCTA from '../comps/Home/BottomCTA';

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
   


  <MainSection></MainSection>
  <What></What>
  
    <Products/>
    <Delivering/>
    <Clients/>
    <BottomCTA></BottomCTA>
   <Footer/>
    </div>
  )
}
