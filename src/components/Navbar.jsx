import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Portfolio</div>
    <div className="navbar-menu">
      <Link to="home" smooth={true} duration={500} offset={-80} className="nav-link">Home</Link>
      <Link to="about" smooth={true} duration={500} offset={-80} className="nav-link">About</Link>
      <Link to="skills" smooth={true} duration={500} offset={-80} className="nav-link">Skills</Link>
      <Link to="projects" smooth={true} duration={500} offset={-80} className="nav-link">Projects</Link>
      <Link to="education" smooth={true} duration={500} offset={-80} className="nav-link">Education</Link>
      <Link to="contact" smooth={true} duration={500} offset={-80} className="nav-link">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
