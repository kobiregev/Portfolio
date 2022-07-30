import React from "react";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full prose py-6 px-6 md:px-0 mx-auto">
      <h1>My Skills</h1>
      <div className="flex flex-wrap gap-1 justify-center max-w-sm md:max-w-lg">
        <span className="badge badge-lg">HTML</span>
        <span className="badge badge-lg">CSS</span>
        <span className="badge badge-lg">JavaScript</span>
        <span className="badge badge-lg">Typescript</span>
        <span className="badge badge-lg">React</span>
        <span className="badge badge-lg">Github</span>
        <span className="badge badge-lg">Responsive Design</span>
        <span className="badge badge-lg">SQL</span>
        <span className="badge badge-lg">Mongodb</span>
        <span className="badge badge-lg">Node.js</span>
      </div>
    </div>
  );
};
