import { decodeToken } from "../../functions/decode";
import {AiOutlineUserAdd} from 'react-icons/ai';

const UserDetails = ({user}:{user:any}) => {
    const decoded:any = decodeToken();
    const myUsername:any = decoded?decoded.username:null;
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
               <div>{ <h1 className="text-gray-500 italic text-sm">{user.username?'@'+user.username:""}</h1>}</div>

<div>{user.fullname && <h1 className="text-2xl font-bold mb-1">{user.fullname}</h1>}</div>
<div>
   <button className="zx-shadow-btn px-2 py-1 rounded-lg border-2 border-black hover:bg-yellow-400"
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
        <div>Edit Profile</div>:
        <div className="flex items-center"><AiOutlineUserAdd className="mr-1"/> Connect</div>
    }
   </button>
</div>
               </section>
        </main>
    );
}

export default UserDetails;