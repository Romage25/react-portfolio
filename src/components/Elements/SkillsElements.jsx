import { skills, programmingSkills } from "../../data";

export default function Skills() {
  const skillsListElements = skills.map((skill, i) => (
    <li key={i} className="text-lg ml-11 flex flex-row gap-3">
      <span className="block">&bull;</span>
      <span className="block">{skill}</span>
    </li>
  ));
  const programmingSkillsListElements = programmingSkills.map(
    (progSkill, i) => (
      <li key={i} className="text-lg ml-11 flex flex-row gap-3">
        <span className="block">&bull;</span>
        <span className="block">{progSkill}</span>
      </li>
    )
  );
  return (
    <>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-bold">Skills</h3>
          <ul>{skillsListElements}</ul>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-bold">Programming Skills</h3>
          <ul>{programmingSkillsListElements}</ul>
        </div>
      </div>
    </>
  );
}
