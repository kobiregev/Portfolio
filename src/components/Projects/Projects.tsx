import React from "react";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="hero bg-base-200 my-6">
      <div className="hero-content text-center">
        <div className="max-w-md prose">
          <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
};
