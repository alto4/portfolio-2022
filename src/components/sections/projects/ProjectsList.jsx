import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects";

const Projects = () => {
  return (
    <section className="row projects" id="projects">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
};

export default Projects;
