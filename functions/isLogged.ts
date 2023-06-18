import Cookies from "js-cookie";
import { LoginStatus } from "../const/constants";

const API_ROOT = "https://api.ziqx.in/auth/";
const API_KEY = "ec48c556511b042a27daf277bd1436cc";



const isLoggedHard = async()=>{
    const token = Cookies.get('token');
   try {
    if(token!=null && token!=undefined){
        const res = await fetch(`${API_ROOT}validateToken.php?token=${token}`)
        .then(res=>res.json()).catch(err=>console.log(err));
        if(res.status=='success'){
            return LoginStatus.LoggedIn;
        }else{
            console.log('error');
            return LoginStatus.NetworkError;
        }
    }
    return LoginStatus.LoggedOut;
   } catch (error) {
    console.log(error);
    return LoginStatus.NetworkError;
   }
    
    
}
export default isLoggedHard;

export function isLogged(){
    const token = Cookies.get('token');
    if(token!=null && token!=undefined){
        return true;
    }
    return false;
}