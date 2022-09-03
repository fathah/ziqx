const NavBar = () => {
    const navItems = [
        {
            title:"Account",
            to:"https://account.ziqx.in",
        },
    ];
    return (
        <nav 
        className="nav2 fixed flex justify-between items-center z-50 top-0 left-0 right-0  py-4   px-10 lg:px-20"
        id="logo"
        data-aos="fade-down"
        data-aos-duration="1000"
        >
             <img src="/logo-w.png" className="w-2/12 md:w-16 lg:w-20" alt="ziqx" />
{
    navItems.map((item, index) => {
        return (
            <a href={item.to} key={index}
            className="text-gray-300 hover:text-white duration-300 inline-block"
            >
                {item.title}
            </a>
        );
    })
}

        </nav>
    );
}

export default NavBar;