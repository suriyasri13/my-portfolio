import React from "react";
import PageTransition from "./PageTransition";
import profileImg from "../assets/profile.jpg"; // Correct import path
import "./Home.css";

const Home = () => {
  return (
    <PageTransition direction="left">
      <section className="home-section" id="home">
        <div className="home-left">
          <h1>
            Hello, I am <span className="highlighted">Suriya Sri L</span>
          </h1>
          <p>
            Aspiring Computer Science Engineer passionate about AI, web
            technologies, and design. Proficient in HTML, CSS, SQL, Ethical
            Hacking. Enthusiastic about crafting intuitive and visually
            appealing digital experiences. Committed to building impactful and
            user-friendly solutions.
          </p>
          <a href="#contact" className="contact-button">
            Contact Me
          </a>
        </div>
        <div className="home-right">
          <img src={profileImg} alt="Suriya Sri" className="profile-img" />
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
