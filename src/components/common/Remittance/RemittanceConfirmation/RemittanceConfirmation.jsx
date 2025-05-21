import "./RemittanceConfirmation.css"
import sendIcon from "../../../../assets/icons/send-successful-icon.svg";



export const RemittanceConfirmation = () => {
  return (
    <div className="sendBox">
    <img src={sendIcon} alt="sendIcon"/>
    <div className="sendText">
        enviada con éxito
    </div>
    </div>
  )
}