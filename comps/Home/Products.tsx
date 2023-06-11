

const Products = () => {
    var products = [
        {name:"De Studio", logo:"destudio.png",link:"https://destudio.ziqx.in"},
    {name:"Qeats Food Devlivery", logo:"qeats.png",link:""},
    {name:"Libstackz Library Management", logo:"libstackz.png",link:"https://libstackz.ziqx.in"},
    {name:"Manzil Developers", logo:"manzildev.png",link:"https://manzilmedia.net"},
    {name:"Tezt Online Tests", logo:"tezt.png",link:"https://tezt.ziqx.in"},
    {name:"Bitpro ERP/POS Software", logo:"bitpro.png",link:""},
    {name:"Certiption", logo:"certiption.png",link:"https://certiption.com"},
    {name:"Faably SSLC Guide", logo:"faably.png",link:""},
    {name:"Zaimart Online Store", logo:"zaimart.png",link:""},
    {name:"Zoozle Online Canvas", logo:"zoozle.png",link:"https://zoozle.ziqx.in"},
    {name:"Z Auth", logo:"zauth.png",link:"https://account.ziqx.in"},
    {name:"Zinga Secure Messenger", logo:"zinga.png",link:"https://thezin.ga"},
    {name:"Fabex Framework", logo:"fabex.png",link:""},
    {name:"Zchool", logo:"zchool.png",link:"https://zchool.in"},
    {name:"ZiDG ZIqx Developers Group", logo:"zidg.png",link:""},
    {name:"Debaze", logo:"debaze.png",link:"https://debaze.ziqx.in"},

    ];
    return (<div className=" py-8 px-4 lg:px-20"
    style={{
        backgroundColor:"#f4f2ed"
    }}
    >
        <header className="mx-10 lg:mx-52 my-2">
            <h2 className="text-center text-gray-400 font-bold text-2xl">
                OUR PRODUCTS</h2>
        </header>
    <div
className="flex flex-wrap justify-center items-center">

   {
        products.map(prdct =>(
            <div
            key={prdct.name}
            className="flex text-white font-bold py-5"
            onClick={()=>{
                if(prdct.link.length>3){
                    window.open(prdct.link, "_blank")
                }
            }}
            >
            <img src={`/imgs/products/${prdct.logo}`}
            className="mx-4 lg:mx-14 h-16 lg:h-28 product-logo"
            
            alt={prdct.name} />
            </div>
        ))
    }
 </div>
    </div>
    );
}
 
export default Products;