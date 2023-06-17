import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export const decodeToken = ()=>{
    const token:any = Cookies.get('token');
    if(token){
        var decoded:any = jwt_decode(token);
        return decoded;
    }
    return null;

}