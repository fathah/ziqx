import { QRCode } from "react-qrcode-logo";

const QrCodeComp = ({username}:{username:string}) => {
    return (
        <div className="flex justify-center items-center">
            <QRCode value={`https://ziqx.in/${username}`}
            qrStyle="dots"
            eyeRadius={10}
            />
        </div>
    );
}

export default QrCodeComp;