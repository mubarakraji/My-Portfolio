import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import c1 from "../assets/c1.jpg";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktop-menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "desktopMenuListItem active" : "desktopMenuListItem"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "desktopMenuListItem active" : "desktopMenuListItem"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "desktopMenuListItem active" : "desktopMenuListItem"
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive ? "desktopMenuListItem active" : "desktopMenuListItem"
            }
          >
            Clients
          </NavLink>
        </div>
        <NavLink
          to="/contact"
          className="desktopmenuBtn"
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
        >
          <img src={c1} alt="Contact Icon" className="desktopmenuImg" /> Contact Me
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
