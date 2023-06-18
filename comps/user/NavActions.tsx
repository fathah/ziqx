import { useEffect, useState } from "react";
import { isLogged } from "../../functions/isLogged";
import { BiUser } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { getPendingConnections } from "../../functions/connections/get";

const NavActions = () => {
    const logged:boolean = isLogged();
    const [hasPending, setHasPending] = useState<boolean>(false);

    const itemClass = "relative p-2 border border-white rounded-md mx-2 hover:text-black hover:bg-white hover:scale-105 duration-300 cursor-pointer"
   
   useEffect(() => {
         if(logged){
              if(getPendingConnections().length>0){
                   setHasPending(true);
              }}
   },[])
   
    return (
        <div>
            {
                logged ? <section className="flex text-white text-2xl">
                    <div className={itemClass}>
                    {hasPending && <div className="absolute right-1 top-1 h-2 w-2 bg-yellow-400 rounded-full"></div>}    
                        <LuUsers/></div>
                    <div className={itemClass}><BiUser/></div>
                </section>:
                <button className="text-white hover:text-black hover:bg-white flex items-center border border-white 
                rounded-md px-2 py-1  hover:scale-105 duration-300 cursor-pointer text-sm"
                onClick={()=>{
                    window.location.href="https://account.ziqx.in?ref=https://ziqx.in"
                }}
                >
                    <BiUser className="mr-2"/> Login</button>
            }
        </div>
    );
}

export default NavActions;