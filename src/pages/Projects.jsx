import React from "react";
import ProjectItem from "../components/ProjectItem";
import '../styles/Projects.css';
import { ProjectList } from "../helpers/ProjectList";
import Loader from "../components/Loader";

function Projects() {
  return (
    <div className="projects">
      <h1>My personal projects</h1>
      {/* <Loader /> */}
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem title={project.title} image={project.image} id={idx} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
