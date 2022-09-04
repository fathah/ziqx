import ZxButton from "../Layouts/ZxButton";

const MainSection = () => {
    return (
        <section className="w-full h-screen flex flex-col lg:flex-row  items-center px-10 lg:px-20 xl:px-40 "
    id="topImage"
    style={{
      minHeight:"100vh",
      //backgroundImage:"url('/imgs/mainbg.jpg')",
      backgroundColor:"rgb(244, 242, 237,0.5)",
      backgroundSize:"cover",
      //backgroundPosition:"center",
    }}
    >
  <div className='order-2 lg:order-1'>
  <h1 className="font-bold text-5xl md:text-6xl xl:text-7xl mt-2"
  style={{
    lineHeight:"1.1",
  }}

  data-aos="fade-up"
  data-aos-duration="1000"
  >
    Techology  is easy-peasy
    with <br />
    <span className="bg-yellow-400 inline-block px-2 pb-1 mt-3">Ziqx</span>
    </h1>
    <p className='mt-6 lg:w-7/12' data-aos="fade-up"
      data-aos-duration="1200"
    >
      Presenting digital solutions in a minimal & comprehensive eco-system.
    </p>
 
    <ZxButton className="mt-4">
      Know More
    </ZxButton>
  </div>

<div className='order-1 lg:order-2 w-full flex justify-center mt-28 lg:mt-4'>
  <img src="/imgs/ziqx-side.svg" className='w-full md:w-8/12 xl:w-10/12 up-down-anim' alt="" />
</div>
 
   
    </section>
    );
}

export default MainSection;