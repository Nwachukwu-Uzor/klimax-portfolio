import React from "react";
import Container from "../Layout/Container";
import ResumeEducationDetail from "./ResumeEducationDetail";

const schools = [
  {
    id: 1,
    date: "Feb. 2021 - June. 2021",
    title: "User Experience Design",
    school: "Zuri/ingressive for good",
  },
  {
    id: 2,
    date: "Jan. 2020 - Sept. 2020",
    title: "User Experience Design",
    school: "Google",
  },
  {
    id: 3,
    date: "Jan. 2017 - Mar. 2017",
    title: "Mobile App Development",
    school: "Andela",
  },
  {
    id: 4,
    date: "Dec. 2014 - Dec. 2019",
    title: "Bachelor’s Degree - BEng, Mechanical Engineering",
    school: "Federal University of petroleum Resources",
  },
];

const ResumeEducation = () => {
  return (
    <section className="my-6 lg:my-12">
      <Container className="grid grid-cols-2 justify-between">
        <h1 className="text-2xl lg:text-4xl font-bold">EDUCATION</h1>
        <p className="text-2xl lg:text-4xl">🎓</p>
      </Container>
      {schools.map((school) => (
        <ResumeEducationDetail
          school={school.school}
          key={school.id}
          date={school.date}
          title={school.title}
        />
      ))}
    </section>
  );
};

export default ResumeEducation;
