/* eslint-disable react/prop-types */
import { resumeData } from "../data";
import ResumeElements from "./Elements/ResumeElements";
import Skills from "./Elements/SkillsElements";

const resumeMap = resumeData.map((resume, i) => (
  <ResumeElements
    key={i}
    year={resume.year}
    school={resume.school}
    level={resume.level}
    paragraph={resume.paragraph}
    isOJT={resume.isOJT}
  />
));

export default function Resume() {
  return (
    <section>
      <div className="bg-blue-100 py-14">
        <div className="w-[80%] mx-auto">
          <h3 className="text-4xl font-bold">Education</h3>
          {resumeMap}
          <div>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
