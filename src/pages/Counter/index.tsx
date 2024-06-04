import React, { useReducer } from "react";
import { buttonText } from "./data";
import CounterButton from "../../components/CounterButton";

type State = {
  count: number;
};

// Define the type for the actions
type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" };

const initialState: State = {
  count: 0,
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (index: number) => {
    if (index === 0) {
      dispatch({ type: "INCREMENT" });
    } else if (index === 1) {
      dispatch({ type: "DECREMENT" });
    } else {
      dispatch({ type: "RESET" });
    }
  };

  return (
    <div className="text-center min-h-screen m-auto flex flex-col justify-center">
      <h1 className="font-bold text-8xl">Counter App</h1>
      <h1 className="my-10 text-7xl font-bold">{state.count}</h1>
      <div>
        {buttonText.map((button, index) => (
          <CounterButton
            key={index}
            buttonText={button}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Counter;
