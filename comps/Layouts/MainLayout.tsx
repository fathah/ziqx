const MainLayout = (props:any) => {
    return (
        <div className={"px-14 md:px-24 lg:px-40 "+ props.className} style={props.style}>
            {props.children}
        </div>
    );
}
 
export default MainLayout;