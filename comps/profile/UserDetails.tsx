import { decodeToken } from "../../functions/decode";
import {AiOutlineUserAdd} from 'react-icons/ai';
import {MdEdit} from 'react-icons/md';

const UserDetails = ({user}:{user:any}) => {
    const decoded:any = decodeToken();
    const myUsername:any = decoded?decoded.username:null;


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
   <button className="zx-shadow-btn px-2 py-2 rounded-md border-2 border-black bg-black text-white hover:text-black hover:bg-yellow-400 text-xs"
   onClick={()=>{
         if(myUsername && myUsername==user.username){
              window.location.href="https://account.ziqx.in"
         }else{
              alert("Coming Soon")
         }
   }}
   >
    {
        myUsername && myUsername==user.username?
        <div  className={btnCls}><MdEdit  className="mr-1 text-base"/> Edit Profile</div>:
        <div className={btnCls}>
            <AiOutlineUserAdd className="mr-1 text-base"/> Connect</div>
    }
   </button>
</div>
               </section>
        </main>
    );
}

export default UserDetails;