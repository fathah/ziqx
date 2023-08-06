import ZxButton from "../Layouts/ZxButton";

const MainSection = () => {
    return (
        <section className="w-full h-screen flex  items-center px-10 lg:px-20 xl:px-40 "
    id="topImage"
    style={{
      minHeight:"100vh",
      //backgroundImage:"url('/imgs/mainbg.jpg')",
      backgroundColor:"rgb(244, 242, 237,0.7)",
      backgroundSize:"cover",
      //backgroundPosition:"center",
    }}
    >
<main className="flex flex-col lg:flex-row">
<div className='order-2 lg:order-1'>
  <h1 className="font-bold text-5xl md:text-6xl xl:text-7xl mt-4"
  style={{
    lineHeight:"1.1",
  }}

  data-aos="fade-up"
  data-aos-duration="1000"
  >
    Simplified Tech, Unleashed Potential with 
    <span className="mx-2"></span>
    <span className="bg-yellow-400 inline-block px-2 pb-1 mt-3">Ziqx</span>
    </h1>
    <p className='mt-6 lg:w-8/12 text-xl text-gray-500' data-aos="fade-up"
      data-aos-duration="1200"
    >
      Harness the Power of Minimalistic Design and Cutting-Edge Technology for Digital Excellence
    </p>
 <div data-aos="fade-up"
  data-aos-delay="700">
    <ZxButton className="mt-4"
    id="know"
    onClick={()=>{
       document.getElementById('know')!.scrollIntoView();

    }}
    >
      Know More
    </ZxButton></div>
  </div>

<div className='order-1 lg:order-2 w-full flex justify-center  lg:mt-4'>
  <img src="/imgs/ziqx-side.svg" className='w-full md:w-8/12 xl:w-10/12 up-down-anim' alt="" />
</div>
</main>
 
   
    </section>
    );
}

export default MainSection;