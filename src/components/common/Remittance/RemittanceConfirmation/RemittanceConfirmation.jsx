import "./RemittanceConfirmation.css"
import { Icon } from "../../ui/Icon/Icon";

export const RemittanceConfirmation = () => {
  return (
    <div className="sendBox">
      <Icon name="send_successful" width="37px"/>
    <div className="sendText">
        enviada con éxito
    </div>
    </div>
  )
}