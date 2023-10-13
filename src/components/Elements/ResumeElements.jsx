/* eslint-disable react/prop-types */
export default function ResumeElements({
  year,
  school,
  level,
  paragraph,
  isOJT,
}) {
  return (
    <div className="flex flex-row justify-between gap-5 my-10">
      <div className="min-w-[100px] md:w-[100px]">
        <img
          src={isOJT ? "working.svg" : "education.svg"}
          alt={isOJT ? "working" : "education"}
          className="w-[80px]"
        />
      </div>
      <div>
        <span className="block text-lg font-bold mb-4">{year}</span>
        <h4 className="text-2xl font-bold mb-5 ">{school}</h4>
        <h5 className="text-xl font-bold mb-4">{level}</h5>
        <p >{paragraph}</p>
      </div>
    </div>
  );
}
