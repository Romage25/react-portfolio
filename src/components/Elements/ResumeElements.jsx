/* eslint-disable react/prop-types */
export const ResumeElements = ({ year, school, level, paragraph, isOJT }) => (
  <div className="flex flex-row justify-between gap-5 my-10">
    <div className="w-[300px] md:w-[100px]">
      {!isOJT && (
        <img src={"education.svg"} alt="education logo" width={'100%'}/>
      )}
      {isOJT && <img src={"working.svg"} alt="education logo" width={"50px"} />}
    </div>
    <div>
      <span className="block text-lg font-bold mb-4">{year}</span>
      <h4 className="text-2xl font-bold mb-5 ">{school}</h4>
      <h5 className="text-xl font-bold mb-4">{level}</h5>
      <p>{paragraph}</p>
    </div>
  </div>
);