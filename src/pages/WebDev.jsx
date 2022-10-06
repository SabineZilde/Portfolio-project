import React from 'react';
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

function WebDev() {
  return (
    <div className="projects">
        <h1>My web development projects</h1>
        <div className="projectGrid">
        {ProjectList.map((project, idx) => {
          return <ProjectItem title={project.title} image={project.image} id={idx} key={idx} />;
        })}
      </div>
    </div>
  )
}

export default WebDev;