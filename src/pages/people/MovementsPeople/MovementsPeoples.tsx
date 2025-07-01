import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard"
import "./MovementsPeoples.css"

// This section calls the different components to display them on the page
export const MovementsPeoples = () => {
    return (
        <div className="movements-page-container">
          <MovementCard totalItems={8} filter enableLink/>
          <MovementCard totalItems={8} filter enableLink/>
        </div>
    )
}