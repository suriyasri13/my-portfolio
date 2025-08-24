import React from "react";
import PageTransition from "./PageTransition";
import "./About.css";
const About = () => (
  <PageTransition direction="right">
    <section className="about-section" id="about">
      <h2>
        <span className="colored-title">About</span> Me
      </h2>
      <div className="about-cards">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            Aspiring Computer Science Engineer passionate about AI and web
            technologies, with a love for creating user-friendly designs.
          </p>
        </div>
        
        <div className="about-card">
          <h3>Certifications</h3>
          <ul>
            <li>Django framework by V3 TechServe</li>
            <li>Software Development Life Cycle by DelQ Solutions</li>
            <li>Introduction to Cybersecurity by Cisco</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Languages</h3>
          <ul>
            <li>English</li>
            <li>Tamil</li>
            <li>Hindi</li>
          </ul>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default About;
