const Footer = () => {
    const footerLinks = [
        {title:"Account",to:"https://account.ziqx.in"},
        {title:"Libstackz",to:"https://libstackz.ziqx.in"},
        {title:"Qeats",to:"https://qeats.in"},
        {title:"Tezt",to:"https://tezt.ziqx.in"},
        {title:"Zoozle",to:"https://zoozle.ziqx.in"},
        {title:"Zinga",to:"https://zinga.deta.dev"},
        {title:"CDN",to:"https://cdn.ziqx.in"},


    ]
    return (
        <footer className="bg-black text-white flex w-full justify-center py-12">
            <div className="text-center">
                <div className="mx-10">
                {
                    footerLinks.map(
                        (link,index)=>(
                            <a href={link.to} key={index}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-gray-100 duration-300 inline-block mx-4 my-2"
                            >{link.title}</a>
                        )
                    )
                }
                </div>
                <br /> <br />
         <section className="flex justify-center"> <img src="/imgs/logo-w.png" className="opacity-40 w-16" alt="" /></section>
            </div>
        </footer>
    );
}
 
export default Footer;