import React, { useState } from 'react';
import './styles/ImageSlider.css'

const ImageSlider = () => {
  const images = [
    "https://momcozy.com/cdn/shop/files/20241027MOMCOZY-1200-1498.jpg?v=1732953241&width=600",
    "https://momcozy.com/cdn/shop/files/20290915MOMCOZY1200-1498.jpg?v=1732954054&width=600",
    "https://momcozy.com/cdn/shop/files/11_659c4f89-d9b0-4be0-b834-2a1efd57b674.jpg?v=1706078451&width=500",
    "https://momcozy.com/cdn/shop/files/6_2efe5640-ed93-4133-a260-d1dfbf125714.jpg?v=1730966292&width=700"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt="Sliding" className="slider-image" />
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ImageSlider;
