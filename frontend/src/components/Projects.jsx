import React from "react";
import PageTransition from "./PageTransition";
import "./Projects.css";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Developed a fully responsive portfolio website using React, showcasing skills, projects, and contact information with smooth animations and a fiery sunset theme.",
    techStack: ["React", "CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/suriyasri13/my-portfolio",
    demoUrl: "https://your-portfolio-url.com",
  },
  // Add your other projects here
  {
    title: "Movie Recommendation System",
    description:
      "Built a movie recommendation system using Python, Pandas, Scikit-learn, and Streamlit to provide personalized movie suggestions based on user preferences.",
    techStack: ["Python", "Machine Learning", "Streamlit"],
    githubUrl: "https://github.com/suriyasri13/movie-recommendation",
    demoUrl: null,
  },
  {
    title: "Fake News Detection System",
    description:
      "Created a machine learning solution for news article classification as real or fake using NLP and classifiers like Logistic Regression, Naive Bayes, and SVM.",
    techStack: ["Python", "NLP", "Scikit-learn"],
    githubUrl: "https://github.com/suriyasri13/fake-news-detection",
    demoUrl: null,
  },
];

const Projects = () => {
  return (
    <PageTransition direction="down">
      <section className="projects-section" id="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.techStack.join(", ")}
              </p>
              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
