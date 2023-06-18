import { useEffect, useState } from "react"
import { LoginStatus } from "../../const/constants"
import isLoggedHard from "../../functions/isLogged"
import NavActions from "../user/NavActions";

const NavBar = () => {
    

    let navItems = [{title:"",to:"",},];
    const aClass = "bg-white text-gray-600 hover:bg-yellow-400 hover:text-black duration-300 inline-block px-4 py-1 lg:py-2  rounded";
    return (
        <nav 
        className="nav2 fixed flex justify-between items-center z-50 top-0 left-0 right-0  py-4 px-10 lg:px-20 xl:px-40 "
        id="logo"
        data-aos="fade-down"
        data-aos-duration="1000"
        >
             <img src="/imgs/logo-w.png" className="w-2/12 md:w-16 lg:w-20"
             onClick={()=>window.location.href="/"}
             alt="ziqx" />
{/* {navItems.map((item, index) => {return (<a href={item.to} key={index} className={aClass}>{item.title}</a>);})} */}

<NavActions/>
        </nav>
    );
}

export default NavBar;