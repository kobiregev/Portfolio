import React from "react";
import { Project } from "./Project";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="hero bg-base-200 my-6">
      <div className="hero-content text-center">
        <div className="max-w-md md:max-w-4xl text-center ">
          <div className="prose my-6 mx-auto ">
            <h1>Projects</h1>
          </div>
          <div className="w-full flex flex-wrap gap-6 items-center justify-center">
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
};
