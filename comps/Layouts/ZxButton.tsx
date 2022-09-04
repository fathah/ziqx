const ZxButton = (props:any) => {
    return (
        <div 
        id={props.id}
        className={`relative ${props.className??''}`}
        onClick={props.onClick}
        >
             <div className="absolute inline-block text-center px-4 py-3 bg-black text-black rounded 
             cursor-pointer "
             style={{border:"1px solid #000"}}
             >
             {props.children??''}
             </div>
            <div  className="absolute inline-block text-center
             bg-white text-black px-4 py-3 rounded   
            cursor-pointer  zx-btn"
            style={{border:"1px solid #000"}}
            >
            {props.children??''}
            
        </div>
        </div>
       
    );
}

export default ZxButton;