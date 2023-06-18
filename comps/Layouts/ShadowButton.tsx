const ShadowButton = ({title,onClick}:{title:string,onClick:any}) => {
    return (
        <button className="bg-white text-black  px-4 py-3 rounded  zx-shadow-btn"
   style={{border:"1px solid black",}}
   onClick={()=>onClick()}>{title}</button>
    );
}

export default ShadowButton;