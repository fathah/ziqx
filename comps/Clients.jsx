import Marquee from "react-fast-marquee";


const Clients = () => {
    var clients = [
       
        {name:"Scorpion Finance", logo:"scor.png"},
        {name:"Markaz Knowledge City", logo:"mkc.png"},
        {name:"Bolster Campus", logo:"bolster.png"},
        {name:"Dihliz World School", logo:"dihliz.png"},
        {name:"Markaz Garden", logo:"markazgarden.png"},
        {name:"PRISM Foundation", logo:"prism.png"},
        {name:"Katib Media Collective", logo:"katib.png"},
        {name:"Smart People Real Estate", logo:"smartpeople.png"},
    ];
    return (<div className="bg-white py-8">
        <header className="mx-10 lg:mx-52 my-2">
            <h2 className="text-center text-gray-400 font-bold text-2xl">
                TRUSTED BY</h2>
        </header>
    <Marquee
gradientColor={[255, 255, 255]}
speed={30}
>
   {
        clients.map(clnt =>(
            <div
            key={clnt.name}
            className="flex text-white font-bold py-5"
            >
            <img src={`/imgs/clients/${clnt.logo}`}
            className="mx-14"
            style={{height:"100px"}}
            alt="" />
            </div>
        ))
    }
 </Marquee>
    </div>
    );
}
 
export default Clients;