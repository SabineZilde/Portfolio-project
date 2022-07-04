import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import ReorderIcon from "@mui/icons-material/Reorder";
import logo from '../assets/white_ico.png';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  // Set expandNavbar to false, if the location changes
  // Closes expanded navbar on click
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className='logo'>
        <Link to='/'> <img src={logo} alt="Logo" /> </Link>
      </div>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
      <div className="icons">
        <a href='https://www.linkedin.com/in/sabinezilde'><LinkedInIcon /></a>
        <a href="https://github.com/SabineZilde"><GithubIcon /></a>
      </div>
    </div>
  );
}

export default Navbar;
