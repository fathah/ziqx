import ZxButton from "../Layouts/ZxButton";

const BottomCTA = () => {
    return (
        <div className="px-10 lg:px-20 xl:px-40 py-20 bg-pale" data-aos="fade-up">
   <p className="text-2xl lg:text-5xl text-center font-bold pt-4 pb-2"> Build your next dream project with Ziqx</p>
           <p className="text-gray-600 text-center pb-6 lg:mx-52">
                We are a team of passionate developers, designers and marketers 
                who are dedicated to building the best digital products for our clients.
           </p>
           <div  className="flex w-full justify-center" data-aos="fade-up"
  data-aos-delay="700">
   
   <button className="bg-white text-black  
   px-4 py-3 rounded  zx-shadow-btn"
   style={{
    border:"1px solid black",
   }}
   onClick={()=>{
    window.location.href='https://account.ziqx.in'
   }}
   >Join Ziqx. It's Free</button>
   </div>
           </div>
     
       
    );
}

export default BottomCTA;