import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/mms.png";
import Proj2 from "../assets/serveimage.jpg";
import '../styles/Projects.css'

function Projects() {
  return (
    <div className="projects">
      <h1>My personal projects</h1>
      <div className="projectList">
        <ProjectItem name="Social Media Website" image={Proj1} />
        <ProjectItem name="Project 2" image={Proj2} />
      </div>
    </div>
  );
}

export default Projects;
