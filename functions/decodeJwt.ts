import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const decodeJwtAndSetCookie = ()=>{
    if(Cookies.get('token')!=null || Cookies.get('token')!=undefined){
        const token:string = Cookies.get('token') as string;
        var decoded:any = jwt_decode(token);
        Cookies.set('userid', decoded.id);
        Cookies.set('userstatus', decoded.status);
    }else{
        window.location.href="/login";
    }

}

export default decodeJwtAndSetCookie;