import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css'

export default function StarRating({ size = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleMouseEnter(index: number) {
    setHover(index)
  }

  function handleMouseLeave() {
    setHover(rating)
  }

  function handleClick(index: number) {
    setRating(index);
  }
  return (
    <div>
      {Array(size)
        .fill(0)
        .map((_, index) => {
         index += 1
         return (
          <span
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            className={index <= hover ? "active": ""}
          >
            <FaStar size={40} 
            />
          </span>
          
            
        )})}
    </div>
  );
}
