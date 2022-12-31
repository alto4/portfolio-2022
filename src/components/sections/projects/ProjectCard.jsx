import React from "react";

const ProjectCard = ({ project }) => {
  const { title, image, tags, technologies } = project;

  const getIcon = (technology) => {
    switch (technology) {
      case "html":
        return "devicon-html5-plain";
      case "css":
        return "devicon-css3-plain";
      case "javascript":
        return "devicon-javascript-plain";
      case "python":
        return "devicon-python-plain";
      case "d3":
        return "devicon-d3js-plain";
      case "react":
        return "devicon-react-original";
      case "redux":
        return "devicon-redux-original";
      case "node":
        return "devicon-nodejs-plain";
      case "express":
        return "devicon-express-original";
      case "django":
        return "devicon-django-plain";
      case "mongodb":
        return "devicon-mongodb-plain";
      case "postgres":
        return "devicon-postgresql-plain";
      case "figma":
        return "devicon-figma-plain";
      case "bootstrap":
        return 'devicon-bootstrap-plain"';
      case "github":
        return "devicon-github-original";
      default:
        return;
    }
  };

  return (
    <div className="project-card">
      <img className="project-img" src={image} alt="project" />
      <h3>{title}</h3>
      <div className="project-attributes">
        {tags.map((tag, index) =>
          index === tags.length - 1 ? (
            <span>{tag}</span>
          ) : (
            <>
              <span>{tag}</span>
              <span className="separator">&#10033;</span>
            </>
          )
        )}
        <div className="project-technologies">
          {technologies.map((technology, index) => (
            <i className={`${getIcon(technology)} technology-icon`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
