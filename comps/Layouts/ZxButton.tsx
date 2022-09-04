const ZxButton = (props:any) => {
    return (
        <div className={`relative ${props.className??''}`}>
             <div className="absolute inline-flex justify-center 
             items-center px-4 py-2 bg-black text-black rounded 
             cursor-pointer "
             style={{border:"1px solid #000"}}
             >
             {props.children??''}
             </div>
            <div  className="absolute inline-flex justify-center 
            items-center bg-white text-black px-4 py-2 rounded   
            cursor-pointer  zx-btn"
            style={{border:"1px solid #000"}}
            >
            {props.children??''}
            
        </div>
        </div>
       
    );
}

export default ZxButton;