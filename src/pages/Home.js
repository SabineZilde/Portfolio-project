import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Sabīne</h2>
        <div className="prompt">
          <p>A web developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Frontend</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, Bootstrap, MaterialUI,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Backend</h2>
            <span>
              NodeJs, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB, Docker
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
          <li className="item">
            <h2>Graphic Design</h2>
            <span>Adobe Illustrator, Photoshop, InDesign, Premiere Pro</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
