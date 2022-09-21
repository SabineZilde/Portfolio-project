import React from "react";
import { Link } from "react-router-dom";
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
        <Link to='/projects/webdev'><ProjectItem title='Web Development' /></Link>
        <Link to='/projects/graphicdesign'><ProjectItem title='Graphic Design' /></Link>
      </div>

      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem title={project.title} image={project.image} id={idx} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
