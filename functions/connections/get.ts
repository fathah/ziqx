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
         
            if(resp && resp.data.status == "success"){
              localStorage.setItem("connections",JSON.stringify(resp.data.connections));
              return true;
            }else if(resp.data.status == "no_connections"){
              localStorage.setItem("connections",JSON.stringify([]));
              return true;
            }
           else {
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

   export function getPendingConnections():Array<any>{
    const decoded = decodeToken();
    const userId:any = decoded.uid;

    const connections:any = localStorage.getItem("connections");
    if(connections && decoded && userId){
      const parsed = JSON.parse(connections);
      const pending:Array<any> = parsed.filter((con:any)=>con.con_status=='0' && con.con_userId==userId);
          return pending;
    }
    return [];
}
