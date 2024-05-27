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
    <div className="text-center mt-10">
      <h1 className="mb-10 text-7xl font-bold">{count}</h1>
      {buttonText.map((button, index) => (
        <CounterButton
          key={index}
          buttonText={button}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Counter;
