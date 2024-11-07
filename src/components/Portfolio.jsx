import React from 'react';
import './Portfolio.css';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio' className="port">
      <h2 className="portTitle">My Portfolio</h2>
      <span className="portDesc">
        I take pride in paying attention to the smallest details and making sure that my work is pixel-perfect.
        I am excited to bring my skills and experience to help businesses achieve their goals and create a
        strong online presence.
      </span>
      <div className="portImgs">
        <img src={p1} alt="Portfolio 1" className="portImg" />
        <img src={p2} alt="Portfolio 2" className="portImg" />
        <img src={p3} alt="Portfolio 3" className="portImg" />
        <img src={p4} alt="Portfolio 4" className="portImg" />
        <img src={p5} alt="Portfolio 5" className="portImg" />
        <img src={p6} alt="Portfolio 6" className="portImg" />
      </div>
      <button className="portBtn">See More</button>
    </section>
  );
};

export default Portfolio;
