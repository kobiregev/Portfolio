import React from "react";
import { motion } from "framer-motion";
import { ProjectItem } from "./Projects";

type ProjectProps = {
  project: ProjectItem;
};

export const Project: React.FC<ProjectProps> = ({ project }) => {
  const handleClick = () => {
    window.open(project.link, "_blank");
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: "0" }}
      className="card w-80 bg-base-100 shadow-xl hover:cursor-pointer"
      onClick={handleClick}
    >
      <figure className="h-40">
        <img
          className="h-full w-full object-cover"
          src={project.previewImg}
          alt="Project"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {project.title}
          {project.isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          {project.usedTechnologies.map((technology, i) => (
            <div key={`${i}-${project.title}`} className="badge badge-outline">
              {technology}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
