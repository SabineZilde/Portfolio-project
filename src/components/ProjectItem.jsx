import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, title, id }) {
  const navigate = useNavigate();
  return (
    <div className="projectItem" onClick={() => {
      navigate('/project/' + id);
    }}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{title}</h1>
    </div>
  );
}

export default ProjectItem;
