/* eslint-disable react/prop-types */
import { ResumeElements } from "./Elements/ResumeElements";
import { Skills } from "./Elements/SkillsElements";
const lorem =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus in perspiciatis, consequuntur odit rem porro explicabo nesciunt modi exercitationem recusandae soluta quas sed vero, illo consectetur vitae assumenda voluptates perferendis?";

const resumeMap = () => {
  const resumeData = [
    {
      year: "2013 - 2017",
      school: "Liceo De San Pedro",
      level: "Junior Highschool",
      paragraph: lorem,
      isOJT: false,
    },
    {
      year: "2017 - 2019",
      school: "Liceo De San Pedro",
      level: "Senior Highschool",
      paragraph: lorem,
      isOJT: false,
    },
    {
      year: "2019 - 2023",
      school: "Polytechnic University of the Philippines - San Pedro Campus",
      level: "College",
      paragraph: lorem,
      isOJT: false,
    },
    {
      year: "May 22 - August 11, 2023",
      school: "Makati Medical Center",
      level: "Technical Support Intern",
      paragraph: lorem,
      isOJT: true,
    },
  ];
  return resumeData.map((resume, i) => {
    return (
      <>
        <ResumeElements
          key={i}
          year={resume.year}
          school={resume.school}
          level={resume.level}
          paragraph={resume.paragraph}
          isOJT={resume.isOJT}
        />
      </>
    );
  });
};

export default function Resume() {
  return (
    <>
      <section>
        <div className="bg-blue-100 py-14">
          <div className="w-[80%] mx-auto">
            <h3 className="text-4xl font-bold">Education</h3>
            {resumeMap()}
            <div>
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
