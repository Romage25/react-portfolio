export const Skills = () => {
  const skills = [
    "Adaptable",
    "Collaborative team player, able to work effective with others (developers, project managers, and quality assurance teams)",
    "Continous and eagerness to learn",
    "Keep attention to details",
  ];

  const programmingSkills = [
    "Knowledgable in Front-End Development (HTML, CSS, JavaScript)",
    "Knowledgable in SQL and NoSQL databases (MySQL and Firestore Database)",
    "Experience with collaborative tools (Microsoft Office and Github)",
  ];

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
};
