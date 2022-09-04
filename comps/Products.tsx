

const Products = () => {
    var products = [
       
        {name:"Manzil Developers", logo:"manzildev.png"},
        {name:"Qeats Food Devlivery", logo:"qeats.png"},
        {name:"Libstackz Library Management", logo:"libstackz.png"},
        {name:"Tezt Online Tests", logo:"tezt.png"},
        {name:"Bitpro ERP/POS Software", logo:"bitpro.png"},
        {name:"Faably SSLC Guide", logo:"faably.png"},
        {name:"Zaimart Online Store", logo:"zaimart.png"},
        {name:"Zoozle Online Canvas", logo:"zoozle.png"},
        {name:"Z Auth", logo:"zauth.png"},
        {name:"Zinga Secure Messenger", logo:"zinga.png"},
        {name:"Fabex Framework", logo:"fabex.png"},
        {name:"ZiDG ZIqx Developers Group", logo:"zidg.png"},
    ];
    return (<div className="bg-white py-8 px-4 lg:px-20">
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