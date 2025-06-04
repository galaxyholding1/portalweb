import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard"
import "./MovementsPeoples.css"

// En este apartado se llama a los distintos componentes para mostrarlos en la página
export const MovementsPeoples = () => {
    return (
        <div className="movements-page-container">
          <MovementCard totalItems={8} filter enableLink/>
          <MovementCard totalItems={8} filter enableLink/>
        </div>
    )
}