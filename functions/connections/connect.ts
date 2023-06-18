import axios from "axios";
import { API_KEY, API_ROOT } from "../../const/constants";
import { decodeToken } from "../decode";
import Cookies from "js-cookie";

export async function addConnection(
    userId:string
   ): Promise<boolean> {

    const token:any = Cookies.get('token');
    const decoded = decodeToken();
    if(decoded && token){
        const follower:any = decoded.uid;
       const data = JSON.stringify({
            follower,
            userId
       })
           
        try {
          const resp = await axios.post(`${API_ROOT}connections/connect.php`, data,
          {
              headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
              }
          });
      
          if (resp && resp.data.status == "success") {
            return true;
          } else {
            console.log(resp);
          }
        } catch (error) {
          return false;
        }
    }
    
     return false;
   }
   