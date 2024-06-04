import React, { useState } from "react";
import { buttonText } from "./data";
import CounterButton from "../../components/CounterButton";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (index: number) => {
    if (index === 0) {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    } else if (index === 1) {
      setCount((prevCount) => prevCount - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div className="text-center min-h-screen m-auto flex flex-col justify-center">
      <h1 className="font-bold text-8xl">Counter App</h1>
      <h1 className="my-10 text-7xl font-bold">{count}</h1>
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
