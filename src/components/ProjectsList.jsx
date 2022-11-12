import React from "react";

import Container from "../Layout/Container";
import SingleProject from "./SingleProject";

import proj from "../assets/images/9ja911.png";
import dare from "../assets/images/dare-single.png";
import rut from "../assets/images/rut.png";
import sprut from "../assets/images/sprout-energy.png";
import kwaft from "../assets/images/kwaft.png";
import muse from "../assets/images/muse.png";

const ProjectsList = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 justify-between gap-x-4 gap-y-6">
        <SingleProject
          image={proj}
          title="9ja911"
          shortDescription="Emergency medical response"
          tag="Branding"
        />
        <SingleProject
          image={dare}
          title="DARE Conference 2022"
          shortDescription="Setting stories in motion"
          tag="Conference Branding"
        />
        <SingleProject
          image={rut}
          title="rut"
          shortDescription="Emergency medical response"
          tag="Branding"
        />
        <SingleProject
          image={sprut}
          title="Sprout Energy"
          shortDescription="Setting stories in motion"
          tag="Branding"
        />
        <SingleProject
          image={kwaft}
          title="Kwaft"
          shortDescription="Emergency medical response"
          tag="UX"
        />
        <SingleProject
          image={muse}
          title="Muse"
          shortDescription="Setting stories in motion"
          tag="Branding"
        />
      </div>
    </Container>
  );
};

export default ProjectsList;
