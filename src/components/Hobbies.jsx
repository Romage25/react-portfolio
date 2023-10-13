import Slider from "./Slider";

export default function Hobbies() {
  return (
    <>
      <div className="min-h-[80vh] py-14 bg-blue-300">
        <div className="w-[80%] mx-auto">
          <h2 className="text-5xl font-bold mb-10">Hobbies</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            voluptatibus assumenda iure vero. Repudiandae ut doloribus,
            provident velit placeat accusantium repellendus facilis, quod
            soluta, et possimus quaerat! Provident, ratione impedit.
          </p>
          <div className="mt-10">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
