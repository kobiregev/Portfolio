import React from "react";

interface ProjectProps {
  src?: string;
  title?: string;
  isNew?: boolean;
  description?: string;
  link?: string;
  categories?: string[]; // Todo: Convert convert to enum and array of that type
}

export const Project: React.FC<ProjectProps> = ({}) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="h-full">
        <img
          className="h-full"
          src="https://placeimg.com/400/225/arch"
          alt="Project"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Calculator Project
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Calculator Project</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">React</div>
          <div className="badge badge-outline">Redux</div>
        </div>
      </div>
    </div>
  );
};
