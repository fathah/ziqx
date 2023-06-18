import { useEffect } from "react";

const NotFound = () => {
    useEffect(()=>{
        var Tawk_API:any=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/616fc9f0f7c0440a591f190d/1fieapmaq';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode!.insertBefore(s1,s0);
        })();
        
        },[])
    return (
        <div className="min-h-screen max-h-screen w-screen flex justify-center items-center px-10 text-center bg-white">
            <div className="">
           <div className="flex justify-center"> <img src="/imgs/404.gif" alt="404" className="w-8/12" /></div>
            <h1>Oops. The page you are looking for maybe not available right now</h1>
            <button
            onClick={() => window.location.href = "/"}
            className="bg-gray-800 hover:bg-black px-3 py-2 rounded text-white mt-4"
            >Back to Home</button>
            </div>
            <img src="/imgs/arrow.png"
            className="absolute bottom-4 right-10 h-44"
            alt="" />
            <span
            className="absolute bottom-10 right-32 text-gray-500 text-xs"
            >
                Need assistance?
            </span>
        </div>
    );
}
 
export default NotFound;