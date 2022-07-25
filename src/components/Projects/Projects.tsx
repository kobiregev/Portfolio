import React from "react";
import { Project } from "./Project";

export const Projects = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="hero bg-base-200 mt-6" ref={ref}>
      <div className="hero-content text-center">
        <div className="max-w-md md:max-w-4xl text-center ">
          <div className="prose my-6 mx-auto ">
            <h1>Projects</h1>
          </div>
          <div className="max-w-xs md:max-w-full flex flex-wrap gap-6 items-center justify-center">
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
});
