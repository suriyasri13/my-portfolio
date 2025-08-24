import React from "react";
import "./Education.css";

const Education = () => (
  <section className="education-section" id="education">
    <h2>
      <span className="pretitles">My</span>
      <span className="colored-title"> Education</span>
    </h2>
    <div className="education-cards">
      <div className="education-card">
        <h3>B.E. Computer Science and Engineering</h3>
        <p>Meenakshi College of Engineering, Anna University</p>
        <p>Expected Graduation: May 2026 | CGPA: 8.1 / 10</p>
      </div>
      <div className="education-card">
        <h3>Higher Secondary (HSC)</h3>
        <p>Sethu Bhaskara Matriculation Higher Secondary School, Chennai</p>
        <p>Major: Computer Science, Mathematics | 12th – 81%</p>
      </div>
      <div className="education-card">
        <h3>Secondary (SSLC)</h3>
        <p>Sethu Bhaskara Matriculation Higher Secondary School, Chennai</p>
        <p>10th – 50%</p>
      </div>
    </div>
  </section>
);

export default Education;
