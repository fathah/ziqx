import { API_KEY, API_ROOT } from "../../const/constants";

const getUserData = async (username:string)=>{

        const res = await fetch(`${API_ROOT}profile/get.php?api=${API_KEY}&username=${username}`, 
            ).then(res=>res.json()).catch(err=>console.log(err));
            return res;
    
    
}

export default getUserData;