const What = () => {
    return (
        <section className="w-full flex  items-center h-5/6  px-10 lg:px-20 xl:px-40 "
        style={{
            minHeight:"100vh",
            minWidth:"100vw"
        }}
        >
                <div className="w-6/12">
            <img src="/imgs/working.svg" className="w-full -scale-x-100" alt="" />
            </div>
            <div className="w-6/12">
            <h1 className="font-black text-5xl">And what's Ziqx?</h1>
            <p className="mt-4 w-8/12 text-gray-500">
            A planet for creative pops, where developers, designers, branding strategists, 
            marketers gather at one hub. 
            We build simple, easy-to-use, comprehensive and minimal products, so that 
            you can focus on your core business.
            </p>
        </div>
            </section>
        
    );
}

export default What;