import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const lorem =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error corrupti quos sunt maiores alias ipsam eligendi perspiciatis soluta iste minus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error corrupti quos sunt maiores alias ipsam eligendi perspiciatis soluta iste minus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error corrupti quos sunt maiores alias ipsam eligendi perspiciatis soluta iste minus!";

  const slides = [
    {
      text: "Watching Anime",
      img: "anime.jpg",
      paragraph: lorem,
    },
    {
      text: "Playing Mobile Legends",
      img: "mobile-legends.avif",
      paragraph: lorem,
    },
    {
      text: "Learning more about coding",
      img: "learning.avif",
      paragraph: lorem,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const slideMaps = slides.map((slide, index) => (
    <div key={index} className="w-full flex-shrink-0 bg-blue-100 mb-10 p-10">
      <h4 className="text-2xl font-bold mb-5 text-center">
        {slide.text}
      </h4>
      <div className="flex justify-center items-center mb-10">
        <img
          className="max-h-96"
          src={slide.img}
          alt={`${slide.img} image`}
        />
      </div>
      <p>{slide.paragraph}</p>
    </div>
  ))

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transform transition-transform -translate-x-full"
            style={{
              width: `${33.3 * slides.length}%`,
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
          <img src="white-arrow-left.svg" alt="white left arrow" className="w-30px md:w-[30px]"/>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-lg hover:scale-110"
        >
          <img src="white-arrow-right.svg" alt="white right arrow" className="w-30px md:w-[30px]"/>
        </button>
      </div>
    </div>
  );
};

export default Slider;
