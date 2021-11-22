

const Clients = () => {
    var clients = [
       
        {name:"Scorpion Finance", logo:"scorp.png"},
        {name:"Markaz Knowledge City", logo:"mkc.png"},
        {name:"Bolster Campus", logo:"bolster.png"},
        {name:"Bekachi", logo:"bekachi.png"},
        {name:"Dihliz World School", logo:"dihliz.png"},
        {name:"UFB", logo:"ufb.png"},
        {name:"Markaz Garden", logo:"markazgarden.png"},
        {name:"Chixzy", logo:"chixzy.png"},
        {name:"PRISM Foundation", logo:"prism.png"},
        {name:"Koftaci", logo:"koftaci.png"},
        {name:"Katib Media Collective", logo:"katib.png"},
        {name:"Smart People Real Estate", logo:"smartpeople.png"},
    ];
    return (<div className="bg-white py-8 px-4 lg:px-20">
        <header className="mx-10 lg:mx-52 my-2">
            <h2 className="text-center text-gray-400 font-bold text-2xl">
                TRUSTED BY</h2>
        </header>
    <div
className="flex flex-wrap justify-center items-center"
>
   {
        clients.map(clnt =>(
            <div
            key={clnt.name}
            className="flex text-white font-bold py-5"
            >
            <img src={`/imgs/clients/${clnt.logo}`}
             className="mx-4 lg:mx-14 h-16 lg:h-28"
          
            alt={clnt.name} />
            </div>
        ))
    }
 </div>
    </div>
    );
}
 
export default Clients;