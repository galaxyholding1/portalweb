import './StateIndicator.css'

const statesById = {
  cancelled: "Cancelado",
  sucess: "Confirmado",
  pending: "En proceso",
};

export const StateIndicator = ({state}: {state: keyof typeof statesById}) => {
  return (
    <span className={`state-indicator state-${state}`}>
      {statesById[state]}
    </span>
  );
};
