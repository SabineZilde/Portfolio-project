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
        <Link to='/projects/webdev'><ProjectItem title='Web Development' image="https://senotrix.co.uk/wp-content/uploads/2019/12/senotrixuxui5-scaled.jpg" /></Link>
        <Link to='/projects/graphicdesign'><ProjectItem title='Graphic Design' image="https://programmerblog.net/wp-content/uploads/2021/04/career-in-designing-and-graphics.png" /></Link>
      </div>
    </div>
  );
}

export default Projects;
