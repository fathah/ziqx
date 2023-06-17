import { useEffect, useState } from "react";
import getUserData from "../functions/users/getUser";
import { useRouter } from "next/router";
import { MutatingDots } from "react-loader-spinner";
import ZxButton from "../comps/Layouts/ZxButton";
import QrCodeComp from "../comps/profile/QrCode";
import MetaHead from "../comps/common/MetaHead";

const UserProfile = () => {

const [user, setUser] = useState<any>(null);

const router = useRouter();

useEffect(() => {
    if(router.isReady && router.query && router.query.username){
        const usName:any = router.query.username;
        getUserData(usName).then((data) => {
            if(data){
                if(data.status=="available"){
                    setUser(data.data);
                }else{
                    setUser("nan");
                }
            }
            
        }).catch((err) =>{
            console.log('Us Erro', err);
            
        });
    }
    
},[router]);


    return (
       <>
       <MetaHead title={user?`${user.username} on Ziqx`:"Discover on Ziqx"}/>
       <div className="w-full flex justify-center items-center min-h-screen">
        {
            !user ?
            <div className="flex flex-col justify-center items-center">
                <img src="/imgs/logo.png" className="w-3/12 lg:w-2/12 mb-3" alt="" />
                <MutatingDots 
  height="100"
  width="100"
  color="#000"
  secondaryColor= '#FDCF09'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />
            </div>
            :
            user=="nan"?
            <div className="w-full flex flex-col items-center lg:w-5/12 bg-white p-10 rounded-xl shadow-lg ">
                <img src="/imgs/logo.png" className="w-3/12 lg:w-2/12 my-6" alt="" />
                <h1 className="text-lg text-gray-400 text-center mb-10">User not found</h1>

                <button className="bg-white text-black  px-4 py-3 rounded  zx-shadow-btn"
   style={{border:"1px solid black",}}
   onClick={()=>{
    window.location.href='https://account.ziqx.in'
   }}>Join Ziqx</button>


            </div>:
            <div className="w-11/12 flex flex-col items-center lg:w-5/12 bg-white p-10 rounded-xl shadow-lg">
                <div className="bg-black text-white h-20 w-20 text-center flex justify-center items-center rounded-xl">
                    <p className="text-4xl">{user.username && user.username[0]}</p>
                </div>
                <div>{user.username && <h1 className="text-gray-500 italic text-center mt-1">@{user.username}</h1>}</div>

                <div>{user.fullname && <h1 className="text-2xl font-bold text-center mt-3">{user.fullname}</h1>}</div>
                <br />
                <QrCodeComp username={user.username}/>
            </div>
        }
        </div>
        
        </>
    );
}

export default UserProfile;