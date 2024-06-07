import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const data: string[] = [
  "https://images.pexels.com/photos/20175138/pexels-photo-20175138/free-photo-of-a-woman-sitting-on-the-ground-with-her-phone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3596282/pexels-photo-3596282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1777467/pexels-photo-1777467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3225720/pexels-photo-3225720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
