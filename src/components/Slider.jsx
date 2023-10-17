import { slidesData } from "../assets/data.json";
import { useState } from "react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const slideMaps = slidesData.map((slide, index) => (
    <div key={index} className="w-full flex-shrink-0 bg-blue-100 mb-10 p-10">
      <h4 className="text-2xl font-bold mb-5 text-center">{slide.text}</h4>
      <div className="flex justify-center items-center mb-10">
        <img className="max-h-96" src={`${slide.img}.jpg`} alt={`${slide.img}`} />
      </div>
      <p>{slide.paragraph}</p>
    </div>
  ));

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transform transition-transform -translate-x-full"
            style={{
              width: `${(100 / slidesData.length) * slidesData.length}%`,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slideMaps}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-lg hover:scale-110"
        >
          <img
            src="white-arrow-left.svg"
            alt="white left arrow"
            className="w-30px md:w-[30px]"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-lg hover:scale-110"
        >
          <img
            src="white-arrow-right.svg"
            alt="white right arrow"
            className="w-30px md:w-[30px]"
          />
        </button>
      </div>
    </div>
  );
}
