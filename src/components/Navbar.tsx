import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/ragone-zone-logo-transparent.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* Logo linking to home */}
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Ragone Zone Logo" className="nav-logo-img" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={location.pathname === "/blog" ? "active" : ""}>
          <Link to="https://www.missiondiy.com">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
