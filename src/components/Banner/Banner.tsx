import React from "react";
import images from "../../constants/images";
import { BsArrowDownCircle } from "react-icons/bs";

interface HeaderProps {}

export const Banner: React.FC<HeaderProps> = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">HEY, I'M KOBI REGEV</h1>
          <div className="my-6 mx-auto w-60 md:w-[300px]">
            <img
              className="rounded-full w-auto outline-4 outline-primary outline"
              src={images.profile}
              alt="Kobi Regev profile"
            />
          </div>
          <p className="py-6">A Fullstack Web developer</p>
          <button className="btn btn-primary">DOWNLOAD RESUME</button>
          <BsArrowDownCircle className="animate-bounce mt-6 w-8 h-8 mx-auto md:hidden" />
        </div>
      </div>
    </div>
  );
};
