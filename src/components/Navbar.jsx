import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
import logo from '../assets/white_ico.png';
import Close from "@mui/icons-material/Close";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [toggleButton, setToggleButton] = useState(<ReorderIcon />);

  const location = useLocation();

  // Set expandNavbar to false, if the location changes
  // Closes expanded navbar on click
  useEffect(() => {
    setExpandNavbar(false);
    setToggleButton(<ReorderIcon />);
  }, [location]);
 
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className='logo'>
        <Link to='/'> <img src={logo} alt="Logo" /> </Link>
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
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
            setToggleButton(expandNavbar === false ? <CloseIcon /> : <ReorderIcon />);
          }}
        >
          {toggleButton}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
