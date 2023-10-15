import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";
import { IJitsiMeetingProps } from "@jitsi/react-sdk/lib/types";
import {useRouter} from 'next/router'

const JitsiMeeting = dynamic(
  () =>
    import("@jitsi/react-sdk").then(({ JitsiMeeting }) => JitsiMeeting) as any,
  {
    ssr: false,
  }
) as FC<IJitsiMeetingProps>;

const Meet = () => {
const router = useRouter();
const [roomId, setRoomId] = useState<any>(null);
useEffect(() => {
  if (router.isReady && router.query.id) {
    setRoomId(router.query.id as string)
  }
}, [router]);


if(!roomId){
    return <main className="w-full h-screen max-h-screen flex flex-col justify-center bg-black text-center">
        
        <h1 className="text-white">Loading...</h1>
    </main>
}

  return (
    <div className="px-10 w-full h-screen max-h-screen flex flex-col justify-center bg-black">
        <span className=" text-4xl text-white px-6 py-4 my-10 font-bold">Ziqx Meet</span>
     <section className="w-full h-[80vh] rounded-xl ">
     <JitsiMeeting
      
      roomName={roomId}
      lang="en"
      configOverwrite={{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false,
        prejoinPageEnabled: false
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        SHOW_JITSI_WATERMARK: false,
      }}
      userInfo={{
        displayName: '',
        email:""
      }}
      onApiReady={(externalApi) => {
        console.log(externalApi);
        // here you can attach custom event listeners to the Jitsi Meet External API
        // you can also store it locally to execute commands
      }}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = '100%';
        iframeRef.style.width = '100%';
       
      }}
    />
     </section>
    </div>
  );
}

export default Meet;
