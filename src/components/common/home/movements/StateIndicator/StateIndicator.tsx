import './StateIndicator.css'

// Constantes para defininir el estado
const statesById = {
  cancelled: "Cancelado",
  sucess: "Confirmado",
  pending: "En proceso",
};

// Método lógico
export const StateIndicator = ({state}: {state: keyof typeof statesById}) => {
  return (
    <span className={`state-indicator state-${state}`}>
      {statesById[state]}
    </span>
  );
};
