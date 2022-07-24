import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Navbar } from "./components/Navbar/Navbar";
import useDarkMode from "./hooks/userDarkMode";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className="py-0 w-full">
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
