import React from "react";
import "./Clients.css";
import n1 from "../assets/n1.jpg";
import n2 from "../assets/n2.jpg";
import n3 from "../assets/n3.jpg";
import n4 from "../assets/n4.jpg";

const Clients = () => {
  return (
    <section id="clients" className="client">
      <div className="clients">
        <h1 className="clientTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with include:
        </p>
        <div className="clientImgs">
          <img src={n1} alt="Client 1" className="clientImg" />
          <img src={n2} alt="Client 2" className="clientImg" />
          <img src={n3} alt="Client 3" className="clientImg" />
          <img src={n4} alt="Client 4" className="clientImg" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
