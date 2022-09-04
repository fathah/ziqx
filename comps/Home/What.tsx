import ZxButton from "../Layouts/ZxButton";

const What = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row  items-center h-5/6  px-10 lg:px-20 xl:px-40 "
        style={{
            minHeight:"100vh",
            minWidth:"100vw"
        }}
        >
                <div className="lg:w-6/12">
            <img src="/imgs/working.svg" className="w-full -scale-x-100" alt=""
            data-aos="fade-up"
            data-aos-delay="300"
            />
            </div>
            <div className="lg:w-6/12">
            <h1 className="font-black text-3xl lg:text-5xl"
            data-aos="fade-up"
            data-aos-delay="500"
            >And what's Ziqx?</h1>
            <p className="mt-4 lg:w-8/12 text-gray-500"
            data-aos="fade-up"
            data-aos-delay="700"
            >
            A planet for creative pops, where developers, designers, branding strategists, 
            marketers gather at one hub. 
            We build simple, easy-to-use, comprehensive and minimal products, so that 
            you can focus on your core business.
            <ZxButton className="mt-4">
      Know More
    </ZxButton>
            </p>
        </div>
            </section>
        
    );
}

export default What;