import React from "react";
import { motion } from "framer-motion";
export const About = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center py-6"
      ref={ref}
    >
      <article className="max-w-sm md:max-w-lg prose text-center px-6 md:px-0">
        <h1 className="mt-6">ABOUT ME</h1>
        <div className="text-justify">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </div>
        <h2>Get to know me!</h2>
        <p className="text-justify ">
          Get to know me! I'm a Frontend Web Developer building the Front-end of
          Websites and Web Applications that leads to the success of the overall
          product. Check out some of my work in the Projects section. I also
          like sharing content related to the stuff that I have learned over the
          years in Web Development so it can help other people of the Dev
          Community. Feel free to Connect or Follow me on my{" "}
          <a
            className="link link-primary"
            href="https://www.linkedin.com/in/kobi-regev-94a2381b8/"
          >
            Linkedin
          </a>{" "}
          where I post useful content related to Web Development and Programming
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </p>
      </article>
    </motion.div>
  );
});
