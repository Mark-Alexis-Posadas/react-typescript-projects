import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const data: string[] = [
  "https://i.pinimg.com/564x/ba/59/2b/ba592b49ee04ddfe07bf6ce1f46964e3.jpg",
  "https://i.pinimg.com/564x/fe/01/29/fe01293e09e5b8a55eb70369464b95aa.jpg",
  "https://i.pinimg.com/564x/97/47/e8/9747e8bdf2737cad961f069c4c5a85b1.jpg",
  "https://i.pinimg.com/564x/6a/24/66/6a2466c9185dbc61adbb1e9cbb0d474b.jpg",
];
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
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
    <div className="mt-20 m-auto max-w-[700px] flex items-center flex-col relative">
      {data.map((item, index) => (
        <img
          src={item}
          alt="image"
          className={`${
            index === currentSlide ? "block" : "hidden"
          } rounded h-[500px]`}
          key={index}
        />
      ))}

      <div className="grid grid-cols-4 gap-3 py-3 w-full">
        {data.map((item, index) => (
          <img
            src={item}
            alt="image"
            className={`${
              currentSlide === index ? "" : "blur-sm"
            } object-cover rounded w-full h-[100px] cursor-pointer`}
            key={index}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div className="flex items-center justify-between w-full absolute top-60">
        <button
          className={`${
            currentSlide <= 0 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600"
          } text-white rounded-full w-10 h-10 flex items-center justify-center p-2`}
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className={`${
            currentSlide >= 3 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600"
          } text-white rounded-full w-10 h-10 flex items-center justify-center p-2`}
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
