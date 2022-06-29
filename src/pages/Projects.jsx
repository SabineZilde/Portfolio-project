import React from "react";
import ProjectItem from "../components/ProjectItem";
import '../styles/Projects.css';
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My personal projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
            return <ProjectItem title={project.title} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
