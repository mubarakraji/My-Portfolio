import React from "react";
import "./About.css";
import u1 from "../assets/u1.jpg";
import w1 from "../assets/w1.jpg";
import a1 from "../assets/a1.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <span className="aboutTitle">What I Do</span>
      <span className="aboutDesc">
        I am a skilled and passionate web designer with experience in creating
        user-friendly websites. I have a strong understanding of design and a
        keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as
        well as in design software.
      </span>
      <div className="aboutBars">
        <img src={u1} alt="UI/UX Design" className="aboutBarImg" />
        <div className="aboutBarText">
          <h2>UI/UX Design</h2>
          <p>This is a demo text. You can write your own content here.</p>
        </div>
      </div>
      <div className="aboutBars">
        <img src={w1} alt="Website Design" className="aboutBarImg" />
        <div className="aboutBarText">
          <h2>Website Design</h2>
          <p>This is a demo text that can be changed when making the production-ready website.</p>
        </div>
      </div>
      <div className="aboutBars">
        <img src={a1} alt="App Design" className="aboutBarImg" />
        <div className="aboutBarText">
          <h2>App Design</h2>
          <p>You can write text related to mobile app development here.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
