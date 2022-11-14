import React from "react";
import Container from "../Layout/Container";
import { ResumeExperienceDetail } from "../components";

const roles = [
  {
    id: 1,
    date: "Jul. 2021 - Present",
    location: "Abuja, Nigeria",
    title: "Product Designer — Renolt Tech",
    frameworks: "Figma, Figjam, Jira, Miro, Asana, Azure, Adobe Creative suit",
    achievements: [
      {
        id: 1,
        text: "Worked closely with Team Members to design and build several software applications",
      },
      {
        id: 2,
        text: "Leading ux design on HeathTech Project (healthtech mobile app)",
      },
    ],
  },
  {
    id: 2,
    date: "Feb. 2021 - Jun. 2021",
    location: "Abuja, Nigeria",
    title: "Internship — Zuri",
    frameworks: "Figma, Figjam, Adobe XD, Slack, Lucid, Webflow",
    achievements: [
      {
        id: 1,
        text: "Worked closely with Team Members to design and build software applications to launch web and mobile applications for Equipment Leasing system",
      },
    ],
  },
  {
    id: 3,
    date: "Dec. 2019 - May. 2020",
    location: "Delta, Nigeria",
    title: "Brand Designer — Digital Sense",
    frameworks:
      "Procreate, Adobe Illustrator,  Indesign, Photoshop & Affinity designer",
    achievements: [
      {
        id: 1,
        text: "Facilitated clients’ product visions by researching, conceiving, sketching, prototyping and testing brands identity on digital products and stationaries.",
      },
      {
        id: 2,
        text: "Designed a strong brand identity majorly on clothing stationary.",
      },
      {
        id: 3,
        text: "Created Editoral design for a fashion line.",
      },
    ],
  },
  {
    id: 4,
    date: "Oct. 2017 - Mar. 2019",
    location: "Delta, Nigeria",
    title: "Juniour product Designer — Quantum Forte ",
    frameworks:
      "Figma, Figjam, Jira, Notion, Click Up, Adobe XD, Spark AR Studio",
    achievements: [
      {
        id: 1,
        text: "Developed the high-level product road map, listing out the functionalities to be completed within the broader time frames.",
      },
      {
        id: 2,
        text: "Designed virtual, and user experiences for logistics and food delivery systems.",
      },
    ],
  },
  {
    id: 5,
    date: "May. 2014 - jan. 2015",
    location: "Delta, Nigeria",
    title: "Junior Intern — Kabela Studios",
    frameworks: "Davinci Resolve,Photoshop, AfterEffects and Premire Pro.",
    achievements: [
      {
        id: 1,
        text: "Worked closely with a Senior cinematographer in Creating Aninmations used for movies, commercial ads and other forms of media.",
      },
    ],
  },
];

const ResumeExperience = () => {
  return (
    <section>
      <Container className="grid grid-cols-2 justify-between">
        <h1 className="text-2xl lg:text-4xl font-bold">EXPERIENCE</h1>
        <p className="text-2xl lg:text-4xl">🧪</p>
      </Container>
      <div className="my-2 grid gap-3">
        {roles.map((role) => (
          <ResumeExperienceDetail
            date={role.date}
            location={role.location}
            title={role.title}
            frameworks={role.frameworks}
            achievements={role.achievements}
            key={role.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ResumeExperience;
