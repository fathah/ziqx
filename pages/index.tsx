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
