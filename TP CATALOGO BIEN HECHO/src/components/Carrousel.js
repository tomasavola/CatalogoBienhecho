import React, { useState } from "react";
import "../carrousel.css";

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = ["imagen1.png", "imagen2.jpg", "imagen3.jpg"];

  const showSlide = (index) => {
    if (index >= images.length) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(images.length - 1);
    } else {
      setSlideIndex(index);
    }
  };

  const changeSlide = (n) => {
    showSlide(slideIndex + n);
  };

  return (
    <div className="carousel">
      <button id="prevBtn" onClick={() => changeSlide(-1)}>Anterior</button>
      <div className="carousel-container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            style={{ transform: `translateX(${(index - slideIndex) * 100}%)` }}
          />
        ))}
      </div>
      <button id="nextBtn" onClick={() => changeSlide(1)}>Siguiente</button>
    </div>
  );
}
