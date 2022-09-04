import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const decodeJwtAndSetCookie = ()=>{
    if(Cookies.get('token')!=null || Cookies.get('token')!=undefined){
        const token = Cookies.get('token');
        var decoded = jwt_decode(token);
        Cookies.set('userid', decoded.id);
        Cookies.set('userstatus', decoded.status);
    }else{
        window.location.href="/login";
    }

}

export default decodeJwtAndSetCookie;