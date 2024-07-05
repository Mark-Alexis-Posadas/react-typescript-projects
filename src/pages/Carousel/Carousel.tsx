import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ActiveType {
  active: number;
}
const data: string[] = [
  "https://i.pinimg.com/564x/ba/59/2b/ba592b49ee04ddfe07bf6ce1f46964e3.jpg",
  "https://i.pinimg.com/564x/fe/01/29/fe01293e09e5b8a55eb70369464b95aa.jpg",
  "https://i.pinimg.com/564x/97/47/e8/9747e8bdf2737cad961f069c4c5a85b1.jpg",
  "https://i.pinimg.com/564x/6a/24/66/6a2466c9185dbc61adbb1e9cbb0d474b.jpg",
];
export default function Carousel({ active }: ActiveType) {
  const [currentSlide, setCurrentSlide] = useState<number>(active);
  const handlePrev = () => {
    if (currentSlide <= 0) {
      return;
    }
    setCurrentSlide((currentSlide - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    if (currentSlide >= 3) {
      return;
    }
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-5 md:mt-10 lg:mt-20 m-auto max-w-[350px] flex items-center flex-col relative bg-white shadow-md p-3 rounded">
      {data.map((item, index) => (
        <img
          src={item}
          alt="image"
          className={`${
            index === currentSlide ? "block" : "hidden"
          } rounded w-[250px] object-cover h-[250px]`}
          key={index}
        />
      ))}

      <div className="grid grid-cols-4 w-15 gap-3 pt-3">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-[10px] h-[10px] rounded-full ${
              index === currentSlide ? "bg-green-400" : " bg-slate-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex items-center justify-between w-full absolute top-28">
        <button
          className={`${
            currentSlide <= 0 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600"
          } text-white rounded-full w-5 h-5 flex items-center justify-center p-4`}
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className={`${
            currentSlide >= 3 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600"
          } text-white rounded-full w-5 h-5 flex items-center justify-center p-4`}
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
