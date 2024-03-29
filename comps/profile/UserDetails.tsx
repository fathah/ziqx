import { useContext, useEffect, useState } from "react";
import { decodeToken } from "../../functions/decode";
import {AiOutlineUserAdd} from 'react-icons/ai';
import {MdEdit} from 'react-icons/md';
import {BiUserCheck} from 'react-icons/bi';
import { isConnected } from "../../functions/connections/isConnected";
import { getConnectionsCloud } from "../../functions/connections/get";
import { addConnection } from "../../functions/connections/connect";
import { ConnectionContext } from "@/context/ConnectionContext";


enum ConnectionStatus{
    connected,
    notConnected,
    pending
}

const UserDetails = ({user}:{user:any}) => {
    const decoded:any = decodeToken();
    const myUsername:any = decoded?decoded.username:null;
    const [isUserConnected, setIsUserConnected] = useState<any>(null);

    const connections = useContext(ConnectionContext);

    useEffect(() => {
        if(user && (isUserConnected==null || isUserConnected==ConnectionStatus.notConnected)){
            console.log('Checked');
            
            const conStatus:number = isConnected(user.id,connections);
            if(conStatus==1){
                setIsUserConnected(ConnectionStatus.connected);
            } else if (conStatus == 0){
                setIsUserConnected(ConnectionStatus.pending);
            }else{
                setIsUserConnected(ConnectionStatus.notConnected);
            }
        }
    },[user,connections])

    const btnCls:string = "flex items-center"




    return (
        <main className="flex">
            {/* PROFILE PIC */}
            <section>
            <div className="bg-black text-white h-28 w-28 lg:h-32 lg:w-32 text-center flex justify-center items-center rounded-xl">
                    <p className="text-4xl">{user.username && user.username[0]}</p>
                </div>
            </section>
           
           {/* USER DETAILS */}
               <section className="flex flex-col justify-center px-6">
               <div>{ <h1 className="text-gray-500 text-xs">{user.username?'@'+user.username:""}</h1>}</div>

<div>{user.fullname && <h1 className="text-lg lg:text-xl font-bold mb-1">{user.fullname}</h1>}</div>
<div>
   <button 
   className="button text-xs"
   onClick={()=>{
         if(myUsername && myUsername==user.username){
              window.location.href="https://account.ziqx.in"
         }else{
              setIsUserConnected(ConnectionStatus.pending);
              addConnection(user.id);
         }
   }}
   disabled={myUsername && myUsername!=user.username && isUserConnected!==ConnectionStatus.notConnected}
   >
    {
        myUsername && myUsername==user.username?
        <div  className={btnCls}><MdEdit  className="mr-1 text-base"/> Edit Profile</div>:
        <div className={btnCls} >
            {
                isUserConnected!==ConnectionStatus.notConnected? <BiUserCheck className="mr-1 text-base"/>:<AiOutlineUserAdd className="mr-1 text-base"/>
            }
            {isUserConnected==ConnectionStatus.connected?'Connected':
            isUserConnected==ConnectionStatus.pending?'Pending':
            'Connect'} </div>
    }
   </button>
</div>
               </section>
        </main>
    );
}

export default UserDetails;