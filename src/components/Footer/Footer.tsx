import React from "react";
import { FiLinkedin, FiGithub, FiYoutube, FiHash } from "react-icons/fi";
import { Links } from "../../constants/links";

type LinkButtonProps = { children: React.ReactNode; link: string };

const LinkButton: React.FC<LinkButtonProps> = ({ link, children }) => (
  <a href={link} className="btn btn-link btn-sm" target="_blank">
    {children}
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <FiHash />
        <p>Copyright © Kobi-Regev 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <LinkButton link={Links.LINKEDIN}>
          <FiLinkedin className="w-6 h-6" />
        </LinkButton>
        <LinkButton link={Links.GITHUB}>
          <FiGithub className="w-6 h-6" />
        </LinkButton>
        <LinkButton link={Links.YOUTUBE}>
          <FiYoutube className="w-6 h-6" />
        </LinkButton>
      </div>
    </footer>
  );
};
