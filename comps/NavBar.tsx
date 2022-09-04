import { useEffect, useState } from "react"
import isLoggedHard from "../functions/isLogged"

const NavBar = () => {
    const [isLogged, setIsLogged] = useState(false)
    useEffect(()=>{
        
        isLoggedHard().then((res)=>{
          if(res){
            setIsLogged(true)
          }
        })
      },[])

    let navItems = [{title:"",to:"",},];
    const aClass = "text-gray-300 hover:text-white duration-300 inline-block";
    return (
        <nav 
        className="nav2 fixed flex justify-between items-center z-50 top-0 left-0 right-0  py-4    px-10 lg:px-20 xl:px-40 "
        id="logo"
        data-aos="fade-down"
        data-aos-duration="1000"
        >
             <img src="/imgs/logo-w.png" className="w-2/12 md:w-16 lg:w-20" alt="ziqx" />
{/* {navItems.map((item, index) => {return (<a href={item.to} key={index} className={aClass}>{item.title}</a>);})} */}
<a href={isLogged?"https://account.ziqx.in":"https://account.ziqx.in/account?ref=ziqx"}
className={aClass}
>
    {isLogged?"Account":"Login"}</a>
        </nav>
    );
}

export default NavBar;