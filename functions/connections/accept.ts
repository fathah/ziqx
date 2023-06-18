import axios from "axios";
import {  API_ROOT } from "../../const/constants";
import { decodeToken } from "../decode";
import Cookies from "js-cookie";
import { getConnectionsCloud } from "./get";

export async function acceptRequest(
    conId:string,
    status:string
   ): Promise<boolean> {

    const token:any = Cookies.get('token');
    const decoded = decodeToken();
    if(decoded && token){
       const data = JSON.stringify({status,conId})
           
        try {
          const resp = await axios.post(`${API_ROOT}connections/accept.php`, data,
          {
              headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
              }
          });
         await getConnectionsCloud()
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
   