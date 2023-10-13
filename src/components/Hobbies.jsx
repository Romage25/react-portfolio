/* eslint-disable react/no-unescaped-entities */
import Slider from "./Slider";

export default function Hobbies() {
  return (
    <>
      <div className="min-h-[80vh] py-14 bg-blue-300">
        <div className="w-[80%] mx-auto">
          <h2 className="text-5xl font-bold mb-10">Hobbies</h2>
          <p className="text-lg">
            In addition to my professional aspirations, I am an individual with
            a variety of hobbies that I hold dear. When I'm not immersing myself
            in the world of programming and web development, I find joy in a few
            other pursuits.
          </p>
          <div>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
