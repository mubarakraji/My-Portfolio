// Home.js
import React from "react";
import "./Home.css";
import m1 from "../assets/m1.jpg";
import i1 from "../assets/i1.jpg";
import About from "./About";
import Portfolio from "./Portfolio";
import Clients from "./Clients";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <span className="hello">Hello,</span>
          <p className="homeText">
            I'm <span className="homeName">Mubarak</span> <br />
            Website Designer
          </p>
          <p className="homePara">
            With 10+ months of focused experience in software development, I’m
            diving deep into programming with a passion for creating beautiful
            and effective solutions. My journey may be new, but I'm dedicated to
            transforming complex problems into simple, elegant user interfaces
            that provide great experiences.
          </p>
          <a
            href="https://github.com/mubarakraji"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              <img src={i1} alt="Hire Me" className="btnImg" />
              GitHub
            </button>
          </a>
        </div>
        <img src={m1} alt="Background" className="bg" />
      </div>
        <About />
        <Portfolio />
      
        <Clients />
        <Contact />
    </div>
  );
};

export default Home;
