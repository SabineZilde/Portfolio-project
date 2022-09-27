import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "../components/ProjectItem";
import '../styles/Projects.css';
import Loader from "../components/Loader";

function Projects() {
  return (
    <div className="projects">
      {/* <Loader /> */}
      <div className="projectList">
        <Link to='/projects/webdev'><ProjectItem title='Web Development' /></Link>
        <Link to='/projects/graphicdesign'><ProjectItem title='Graphic Design' /></Link>
      </div>
    </div>
  );
}

export default Projects;
