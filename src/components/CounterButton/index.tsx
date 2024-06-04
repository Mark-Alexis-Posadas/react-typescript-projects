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
      className={`text-white rounded mx-2 p-2 ${
        index === 0
          ? "bg-green-600"
          : index === 1
          ? "bg-red-600"
          : "bg-gray-600"
      }`}
      onClick={() => handleClick(index)}
    >
      {buttonText}
    </button>
  );
};

export default CounterButton;
