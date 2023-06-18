import { getLocalConnections } from "./get";

export function isConnected(userId:string):number{
  const curConnections:any[] =   getLocalConnections();
  if(curConnections.length>0){
        const found = curConnections.find((conn:any)=>conn.con_userId==userId||conn.con_follower==userId);
        if(found){
            return parseInt(`${found.status??0}`);
        }
  }
   return -1;
}