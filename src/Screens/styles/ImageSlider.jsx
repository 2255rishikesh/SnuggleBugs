import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    "https://momcozy.com/cdn/shop/files/20241027MOMCOZY-1200-1498.jpg?v=1732953241&width=600",
    "https://momcozy.com/cdn/shop/files/20290915MOMCOZY1200-1498.jpg?v=1732954054&width=600",
    "https://momcozy.com/cdn/shop/files/1_7591866d-e6a4-4769-929a-b9c342e4b1c7.jpg?v=1696731004&width=900",
    "https://www.shutterstock.com/image-photo/portrait-beautiful-asian-mother-hugging-260nw-1545652973.jpg"
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
