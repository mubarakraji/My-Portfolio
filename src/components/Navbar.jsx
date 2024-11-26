import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktop-menu">
          <a href="#" className="desktopMenuListItem">Home</a>
          <a href="#about" className="desktopMenuListItem">About</a>
          <a href="#portfolio" className="desktopMenuListItem">Portfolio</a>
          <a href="#clients" className="desktopMenuListItem">Clients</a>
        </div>
        <a
          href="#contact"
          className="desktopmenuBtn"
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="desktopmenuImg"
          >
            <path d="M21.25 7.506v6.607a3.963 3.963 0 0 1-3.964 3.965h-2.643l-2.18 2.18a.636.636 0 0 1-.925 0l-2.18-2.18H6.713a3.964 3.964 0 0 1-3.964-3.965V7.506a3.964 3.964 0 0 1 3.964-3.964h10.572a3.964 3.964 0 0 1 3.964 3.964" />
          </svg>
          Contact Me
        </a>
        <div className="mobMenu" onClick={() => setShowMenu(!showMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="yellow" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M6 7h12v2H6zm0 4h12v2H6zm0 4h12v2H6z" />
          </svg>
        </div>
      </nav>
      {showMenu && (
        <div className="navMenu" ref={menuRef}>
          <a href="#" className="ListItem" onClick={() => setShowMenu(false)}>
            Home
          </a>
          <a href="#about" className="ListItem" onClick={() => setShowMenu(false)}>
            About
          </a>
          <a href="#portfolio" className="ListItem" onClick={() => setShowMenu(false)}>
            Portfolio
          </a>
          <a href="#clients" className="ListItem" onClick={() => setShowMenu(false)}>
            Clients
          </a>
          <a href="#contact" className="ListItem" onClick={() => setShowMenu(false)}>
            Contact Me
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
