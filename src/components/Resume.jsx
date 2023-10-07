/* eslint-disable react/prop-types */
const lorem =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus in perspiciatis, consequuntur odit rem porro explicabo nesciunt modi exercitationem recusandae soluta quas sed vero, illo consectetur vitae assumenda voluptates perferendis?";

const ResumeElements = ({ year, school, level, paragraph, isOJT }) => (
  <div className="flex flex-row justify-between gap-5 my-10">
    <div>
      {!isOJT && (
        <img src={"education.svg"} alt="education logo" width={"50px"} />
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

const Skills = () => {
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
    <li key={i} className="text-lg ml-11">
      &bull; {skill}
    </li>
  ));
  const programmingSkillsListElements = programmingSkills.map(
    (progSkill, i) => (
      <li key={i} className="text-lg ml-11">
        &bull; {progSkill}
      </li>
    )
  );
  return (
    <>
      <h3 className="text-4xl font-bold mb-10">Skills</h3>
      <ul>{skillsListElements}</ul>
      <h3 className="text-4xl font-bold my-10">Programming Skills</h3>
      <ul>{programmingSkillsListElements}</ul>
    </>
  );
};

export default function Resume() {
  return (
    <>
      <section>
        <div className="w-full bg-blue-100">
          <div className="w-[80%] mx-auto py-5">
            <h3 className="text-4xl font-bold">Education</h3>
            <ResumeElements
              year={"2013 - 2017"}
              school={"Liceo De San Pedro"}
              level={"Junior Highschool"}
              paragraph={lorem}
              isOJT={false}
            />
            <ResumeElements
              year={"2017 - 2019"}
              school={"Liceo De San Pedro"}
              level={"Senior Highschool - General Academic Strand"}
              paragraph={lorem}
              isOJT={false}
            />
            <ResumeElements
              year={"2019 - 2023"}
              school={
                "Polytechnic University of the Philippines - San Pedro Campus"
              }
              level={"College"}
              paragraph={lorem}
              isOJT={false}
            />
            <h3 className="text-4xl font-bold">Experience</h3>
            <ResumeElements
              year={"May 22 - August 11, 2023"}
              school={"Makati Medical Center"}
              level={"Technical Support Intern"}
              paragraph={lorem}
              isOJT={true}
            />
            <Skills />
          </div>
        </div>
      </section>
    </>
  );
}
