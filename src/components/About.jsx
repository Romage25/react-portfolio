import { useEffect } from "react";
import { InfoElements } from "./Elements/InfoElements";

export default function About() {
  const downloadCV = () => {
    const fileUrl = "/Rodel-Gerodias-Curriculum-Vitae.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Rodel_Gerodias-Curriculum_Vitae.pdf"; 
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    return () => {
      const link = document.querySelector("a[download='Rodel_Gerodias-Curriculum_Vitae.pdf']");
      if (link) {
        link.remove();
      }
    };
  }, []);

  return (
    <section>
      <div className="py-14 bg-blue-300">
        <div className="w-[80%] mx-auto flex flex-col justify-between items-center gap-20 md:flex-row">
          <div>
            <img src="rodel.jpg" alt="my photo" />
          </div>
          <div>
            <h2 className="text-5xl font-bold">About Me</h2>
            <p className="text-base my-5 text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus magnam labore quis in mollitia, nobis ullam nostrum
              illum ea impedit voluptatem dolorem amet maxime? Sed praesentium
              facere dolorem adipisci iste?
            </p>
            <div className="flex flex-col gap-5 my-5">
              <InfoElements />
            </div>
            <div className="">
              <h5 className="text-2xl mb-3">Currently building projects...</h5>
              <button onClick={downloadCV} className="bg-blue-500 p-3 rounded-2xl text-white hover:bg-blue-600 hover:text-black">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
