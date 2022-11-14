import React from "react";
import Container from "../Layout/Container";

const ResumeExperienceDetail = ({
  date,
  title,
  achievements,
  frameworks,
  location,
}) => {
  return (
    <Container className="grid lg:grid-cols-2 justify-between">
      <div className="text-[#808080]">
        <p>{date}</p>
        <p className="my-1">{location}</p>
      </div>
      <div>
        <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
        <p className="my-2">
          <span className="font-bold">Frameworks: </span>
          {frameworks}
        </p>
        <ul className="list-disc mt-4 ml-3 lg:ml-8">
          {achievements?.map((achievement) => (
            <li className="mt-2" key={achievement.id}>
              {achievement.text}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ResumeExperienceDetail;
