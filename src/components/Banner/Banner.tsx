import React from "react";
import images from "../../constants/images";
import { BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";

interface HeaderProps {}

export const Banner: React.FC<HeaderProps> = () => {
  return (
    <div className="hero bg-base-200 py-6 ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold"
          >
            HEY, I'M KOBI REGEV
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="my-6 mx-auto w-60 md:w-[300px]"
          >
            <img
              className="rounded-full w-auto outline-4 outline-primary outline"
              src={images.profile}
              alt="Kobi Regev profile"
            />
          </motion.div>
          <p className="py-6">A Fullstack Web developer</p>
          <a
            className="btn btn-primary"
            href="/Kobi-Regev-cv.docx"
            download
            target="_blank"
          >
            Download CV
          </a>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BsArrowDownCircle className="animate-bounce mt-6 w-8 h-8 mx-auto md:hidden" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
