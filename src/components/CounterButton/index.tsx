import React from "react";

interface ButtonType {
  buttonText: string;
  index: number;
  handleClick: (index: number) => void;
}
const CounterButton: React.FC<ButtonType> = ({
  buttonText,
  index,
  handleClick,
}) => {
  return (
    <button
      className={`text-white bg-red rounded mx-2 p-2 ${
        index === 2 ? "bg-red-700" : "bg-blue-700"
      }`}
      onClick={() => handleClick(index)}
    >
      {buttonText}
    </button>
  );
};

export default CounterButton;
