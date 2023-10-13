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
            {/* <div className="">
              <h4 className="text-2xl font-bold mb-5">Watching Anime</h4>
              <img src="" alt="Anime" />
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                non sapiente nemo amet tempora in voluptates, necessitatibus
                harum hic ullam!
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-5">
                Playing Mobile Legends
              </h4>
              <img src="" alt="Mobile Legends" />
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                non sapiente nemo amet tempora in voluptates, necessitatibus
                harum hic ullam!
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-5">Learning to code</h4>
              <img src="" alt="learn" />
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                non sapiente nemo amet tempora in voluptates, necessitatibus
                harum hic ullam!
              </p>
            </div> */}
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
