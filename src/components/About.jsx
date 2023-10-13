/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import InfoElements from "./Elements/InfoElements";

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
      const link = document.querySelector(
        "a[download='Rodel_Gerodias-Curriculum_Vitae.pdf']"
      );
      if (link) {
        link.remove();
      }
    };
  }, []);

  return (
    <section>
      <div className="py-14 bg-blue-300">
      {/* flex flex-col justify-between items-center gap-20 md:flex-row */}
        <div className="w-[80%] mx-auto grid grid-rows- md:grid-cols-3 gap-10">
          <div className="col-span-1 grid place-items-center">
            <img src="rodel.jpg" alt="my photo" />
          </div>
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-5xl font-bold">About Me</h2>
            <p className="text-base my-5 ">
            I am a recent college graduate with a passion for programming and web development. I'm eager to begin my professional journey with a solid foundation in computer science and the resolve to keep up with the rapidly changing tech sector. I get my energy from tackling challenges, coming up with new ideas, and wanting to create cutting-edge but approachable digital experiences. In the field of software development, I'm eager to share my knowledge, learn new things on a regular basis, and have a significant impact.
            </p>
            <div className="flex flex-col gap-5 my-5">
              <InfoElements />
            </div>
            <div className="">
              <h5 className="text-2xl mb-3">Currently building projects...</h5>
              <button
                onClick={downloadCV}
                className="bg-blue-500 p-3 rounded-2xl text-white hover:bg-blue-600 hover:text-black"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
