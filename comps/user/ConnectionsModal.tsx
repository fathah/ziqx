import { useEffect, useState } from "react";
import { getConnectionsCloud, getLocalConnections, getPendingConnections } from "../../functions/connections/get";
import { isLogged } from "../../functions/isLogged";
import { MdClose, MdDone } from "react-icons/md";
import { BeatLoader } from "react-spinners";



const ConnectionsModal = () => {

    const [connectionRequests, setConnRequests] = useState<any>(null)
const [selectedId, setSelectedId] = useState<string>("");

useEffect(()=>{    
    if(isLogged()){
    getConnectionsCloud();
    const conns:any[] = getPendingConnections();
    if(conns){
        setConnRequests(conns)
    }
    }
},[])

    const handleSubmit = (e:any)=>{
        e.preventDefault();

      
    }

const btnCmnClass = "flex items-center zx-shadow-btn px-2 py-1  border border-black rounded-full text-xl"

    return (
        <div className="z-50">
            <input type="checkbox" id="connRequests" className="modal-toggle" />
<label htmlFor="connRequests" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
    <h3 className="text-xl font-bold mb-2">Connection Requests</h3>
   {
    !connectionRequests? <div></div>:
    connectionRequests.length<1?<div className="flex justify-center items-center text-gray-400 h-48">No pending requests</div>:
    connectionRequests.map((conn:any, index:number)=>{
        return (
            <div key={index} className="flex items-center justify-between mb-2 border-b py-2">
                <div className="flex items-center">
                    <div className="w-14 h-14 bg-black text-white flex justify-center items-center rounded-lg">
                        {conn.followerUsername[0]}
                    </div>
                    <div className="ml-3">
                        <div className="text-sm font-bold">{conn.followerFullName}</div>
                        <div className="text-xs text-gray-400">@{conn.followerUsername}</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className={`${btnCmnClass} bg-black text-white hover:bg-yellow-500 hover:text-black`}
                    onClick={()=>{
                         setSelectedId(`accept-${index}`)
                    }}
                    >
                        <MdDone/> <span className="text-xs mx-1">{selectedId==`accept-${index}`?
                        <BeatLoader color="#fff" size={7} className="mt-1"/>
                        :"Accept" }</span>
                         </button>
                    <button className={`${btnCmnClass} ml-2 hover:bg-red-600 hover:text-white`}
                    onClick={()=>{
                        setSelectedId(`ignore-${index}`);
                    }}
                    >
                      <MdClose/> <span className="text-xs mx-1">{selectedId==`ignore-${index}`?
                      <BeatLoader color="#000" size={7} className="mt-1"/>
                      :"Ignore" }</span>
                        
                        </button>
                </div>
            </div>
        )
    })
   }
  
  </label>
</label>
        </div>
    );
}

export default ConnectionsModal;