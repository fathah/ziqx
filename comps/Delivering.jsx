import Lottie from "lottie-react";
import app from "../asset/app.json";

const Delivering = () => {
    return (
        <section className="md:flex px-14 md:px-24 lg:px-40 py-20"
        style={{
            backgroundImage: `url('/imgs/deliver.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
        >
        <div className="w-full md-6/12 lg:w-5/12 flex justify-center ">
             <Lottie animationData={app} className="w-8/12 md:w-full" />
        </div>
        <div className="lg:pt-10 md:ml-10 md:pt-5 lg:ml-20">
            <h1 className="text-3xl lg:text-6xl font-bold text-white"
            style={{
                textShadow: '3px 4px 10px rgba(0,0,0,0.4)',
            }}
            >Delivering the best</h1>
            <p className="w-full lg:w-6/12 text-white mt-3"
             style={{
                textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
            }}
            >
                We at Ziqx always strive to deliver the best. 
                Concerns in security, quality and performance are our main priorities.
                As a community driven platform, we are always one step ahead in securing 
                 the privacy of our users.
                <br />
                


            </p>
        </div></section>
    );
}
 
export default Delivering;