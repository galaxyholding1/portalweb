
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard"
import "./MovementsPeoples.css"

export const MovementsPeoples = () => {
    return (
        <div className="movements-page-container">
          <MovementCard filter/>
          <MovementCard filter/>
        </div>
    )
}