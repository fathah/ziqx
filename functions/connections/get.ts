import axios from "axios";
import { API_KEY, API_ROOT } from "../../const/constants";
import { decodeToken } from "../decode";
import Cookies from "js-cookie";

export async function getConnectionsCloud(): Promise<boolean> {
    const decoded = decodeToken();
    const token:any = Cookies.get('token');
    if(decoded && token){
        const userId:any = decoded.uid;
        try {
          const resp = await axios.get(`${API_ROOT}connections/get.php?userId=${userId}`,
          {
              headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
              }
          });
      
          if (resp) {
            if(resp.data.status == "success"){
              localStorage.setItem("connections",JSON.stringify(resp.data.connections))
            }else if(resp.data.status == "no_connections"){
              localStorage.setItem("connections",JSON.stringify([]))
            }
                
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
   

   export function getLocalConnections(){
         const connections:any = localStorage.getItem("connections");
         if(connections){
              return JSON.parse(connections);
         }
         return [];
   }