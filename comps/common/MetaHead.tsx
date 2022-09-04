import Head from "next/head";

const MetaHead = (props:any) => {
    return (
        <Head>
<title>{props.title??"Ziqx"}</title>
<meta name="title" content={props.title??"Ziqx"}/>
<meta name="description" content={props.description??"Introducing a minimalistic digital eco-system"}/>

<meta property="og:type" content="website"/>
<meta property="og:url" content={props.url??"https://ziqx.in/"}/>
<meta property="og:title" content={props.title??"Ziqx"}/>
<meta property="og:description" content={props.description??"Introducing a minimalistic digital eco-system"}/>
<meta property="og:image" content={props.cover??"https://api.ziqx.in/meta/thumb.png"}/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content={props.url??"https://qeats.in/"}/>
<meta property="twitter:title" content={props.title??"Ziqx"}/>
<meta property="twitter:description" content={props.description??"Introducing a minimalistic digital eco-system"}/>
<meta property="twitter:image" content={props.cover??"https://api.ziqx.in/meta/thumb.png"}></meta>
       
       <link rel="shortcut icon" href="https://api.ziqx.in/meta/favicon.png" type="image/x-icon" />
        </Head>
    );
}

export default MetaHead;