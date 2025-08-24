// Import your images at the top of your Skills.jsx file
import html5 from "../assets/html.png";
import css from "../assets/css-3.png";
import javascript from "../assets/java-script.png";
import react from "../assets/structure.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mg.webp"; // Using nodejs icon as placeholder for express
import git from "../assets/social.png";
import github from "../assets/github-sign.png";
import "./Skills.css";
import PageTransition from "./PageTransition";

// Create the skillIcons array using imported images
const skillIcons = [
  { name: "HTML5", icon: html5 },     // html.png
  { name: "CSS3", icon: css },        // css-3.png
  { name: "JavaScript", icon: javascript }, // java-script.png
  { name: "React", icon: react },           // structure.png
  { name: "Node.js", icon: nodejs },        // nodejs.png
  { name: "MongoDB", icon: mongodb },       // mg.webp
  { name: "Git", icon: git },               // social.png (as Git)
  { name: "GitHub", icon: github },         // github-sign.png
];

const Skills = () => (
  <PageTransition direction="up">
    <section className="skills-section" id="skills">
      <h2>MY SKILLS</h2>
      <div className="skills-container">
        {skillIcons.map(skill => (
          <div className="skill-icon-card" key={skill.name}>
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-single-icon"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  </PageTransition>
);

export default Skills;