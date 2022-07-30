import React from "react";
import { Project } from "./Project";

export type ProjectItem = {
  previewImg: string;
  title: string;
  isNew: boolean;
  description: string;
  link: string;
  usedTechnologies: string[]; // Todo: Convert convert to enum and array of that type
};

const defaultProjects = [
  {
    id: 1,
    link: "https://tiny-dusk-aaddd3.netlify.app/",
    title: "Calculator Project",
    isNew: true,
    description: "",
    previewImg: "/preview/calculator.png",
    usedTechnologies: ["React", "Typescript"],
  },
];

export const Projects = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="hero bg-base-200 py-6" ref={ref}>
      <div className="hero-content text-center">
        <div className="max-w-md md:max-w-4xl text-center ">
          <div className="prose my-6 mx-auto ">
            <h1>Projects</h1>
          </div>
          <div className="max-w-xs md:max-w-full flex flex-wrap gap-6 items-center justify-center">
            {defaultProjects.map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
