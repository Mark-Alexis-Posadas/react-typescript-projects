import React, { useState, useEffect } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ratings: React.FC = () => {
  const [rating, setRating] = useState<number>(
    () => Number(localStorage.getItem("rating")) || 0
  );
  const [hover, setHover] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("rating", rating.toString());
  }, [rating]);

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`
            ${index < (hover || rating) ? "text-yellow-400" : "text-black"}
          text-4xl cursor-pointer`}
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(rating)}
        />
      ))}
    </div>
  );
};

export default Ratings;
