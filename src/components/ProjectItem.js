import React from "react";

function ProjectItem({ image, title }) {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{title}</h1>
    </div>
  );
}

export default ProjectItem;
