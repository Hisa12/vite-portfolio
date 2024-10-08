import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { useRef } from "react";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" width="60px" />
      </div>

      <FontAwesomeIcon
        icon={faBars}
        className="nav-open"
        onClick={openMenu}
        style={{ cursor: "pointer" }}
      />

      <ul className="nav-menu" ref={menuRef}>
        <FontAwesomeIcon
          className="nav-close"
          icon={faX}
          onClick={closeMenu}
          style={{ cursor: "pointer" }}
        />
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#home"
            onClick={closeMenu}
          >
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={closeMenu}
          >
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services"
            onClick={closeMenu}
          >
            <p>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#mywork"
            onClick={closeMenu}
          >
            <p>My Work</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={closeMenu}
          >
            <p>Contact</p>
          </AnchorLink>
        </li>
        <ul className="nav-icons">
          <li className="nav-icon">
            <a href="https://github.com/Hisa12">
              <FontAwesomeIcon icon={faGithub} className="nav-socialmedia" />
            </a>
          </li>
          <li className="nav-icon">
            <a href="https://www.linkedin.com/in/hsato6">
              <FontAwesomeIcon icon={faLinkedin} className="nav-socialmedia" />
            </a>
          </li>
        </ul>
      </ul>
      {/* <ul className="nav-icons">
        <li className="nav-icon">
          <a href="https://github.com/Hisa12">
            <FontAwesomeIcon icon={faGithub} className="nav-socialmedia" />
          </a>
        </li>
        <li className="nav-icon">
          <a href="https://www.linkedin.com/in/hsato6">
            <FontAwesomeIcon icon={faLinkedin} className="nav-socialmedia" />
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default Navbar;
