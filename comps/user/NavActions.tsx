import { useEffect, useState } from "react";
import { isLogged } from "../../functions/isLogged";
import { BiUser } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { getPendingConnections } from "../../functions/connections/get";
import { decodeToken } from "../../functions/decode";
import { useRouter } from "next/router";
import ConnectionsModal from "./ConnectionsModal";
import { connRequestModal } from "../../functions/utils/modalClicks";

const NavActions = () => {
    const logged:boolean = isLogged();
    const [hasPending, setHasPending] = useState<boolean>(false);
const [username, setUsername] = useState<string>("");

    const itemClass = "relative p-2 border border-white rounded-md mx-2 hover:text-black hover:bg-white hover:scale-105 duration-300 cursor-pointer"
   
   useEffect(() => {
         if(logged){
            const decoded = decodeToken();
            if(decoded){
                setUsername(decoded.username);
            }
              if(getPendingConnections().length>0){
                   setHasPending(true);
              }
            
            
            }
   },[])
   
   const router = useRouter();
    return (
        <main>
            {
                logged ? <div className="flex text-white text-2xl">
                    <div className={itemClass}
                    onClick={connRequestModal}
                    >
                    {hasPending && <div className="absolute right-1 top-1 h-2 w-2 bg-yellow-400 rounded-full"></div>}    
                        <LuUsers/></div>
                    <div className={itemClass}
                    onClick={()=>{router.push(`/${username}`)}}
                    ><BiUser/></div>
                </div>:
                <button 
                className="text-white hover:text-black hover:bg-white flex items-center border border-white 
                rounded-md px-2 py-1  hover:scale-105 duration-300 cursor-pointer text-sm"
                onClick={()=>{
                    window.location.href="https://account.ziqx.in?ref=https://ziqx.in"
                }}
                >
                    <BiUser className="mr-2"/> Login</button>
            }
            
        </main>
    );
}

export default NavActions;