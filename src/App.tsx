import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Navbar } from "./components/Navbar/Navbar";
import useDarkMode from "./hooks/userDarkMode";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { useRef } from "react";

const handleScroll = (ref: React.RefObject<any>) => {
  ref.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleAboutScroll = () => {
    handleScroll(aboutRef);
  };

  const handleProjectsScroll = () => {
    handleScroll(projectsRef);
  };

  return (
    <div className="py-0 w-full">
      <Navbar
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        onAboutScroll={handleAboutScroll}
        onProjectsScroll={handleProjectsScroll}
      />
      <Banner />
      <About ref={aboutRef} />
      <Skills />
      <Projects ref={projectsRef} />
      <Footer />
    </div>
  );
}

export default App;
