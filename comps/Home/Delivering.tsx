

const Delivering = () => {
    return (
        <div className="flex items-center">
            <section className="flex items-center flex-col 
            lg:flex-row px-10 lg:px-20 xl:px-40   bg-black
            py-10
            ">

        <div className=" md:ml-10 md:pt-5 lg:ml-20 order-2 lg:order-1">
            <h1 className="text-3xl lg:text-6xl font-bold text-white"
            >Delivering the best</h1>
            <p className="text-white mt-3 mb-6 lg:w-8/12">
                We at Ziqx always strive to deliver the best. 
                Concerns in security, quality and performance are our main priorities.
                As a community driven platform, we are always one step ahead in securing 
                 the privacy of our users.
                <br />
                


            </p>
        </div>
        <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <img src="/imgs/deliver.svg" className="w-full white-svg  up-down-anim" alt="" />
        </div>
        </section>
        </div>
        
    );
}
 
export default Delivering;