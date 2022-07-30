import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(): [boolean, React.Dispatch<any>] {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [darkMode, setDarkMode] = useLocalStorage(
    "useDarkMode",
    prefersDarkMode
  );
  const enabled: boolean = darkMode ?? prefersDarkMode;
  // coffee,halloween
  // [
  //   "light",
  //   "dark",
  //   "cupcake",
  //   "bumblebee",
  //   "emerald",
  //   "corporate",
  //   "synthwave",
  //   "retro",
  //   "cyberpunk",
  //   "valentine",
  //   "halloween",
  //   "garden",
  //   "forest",
  //   "aqua",
  //   "lofi",
  //   "pastel",
  //   "fantasy",
  //   "wireframe",
  //   "black",
  //   "luxury",
  //   "dracula",
  //   "cmyk",
  //   "autumn",
  //   "business",
  //   "acid",
  //   "lemonade",
  //   "night",
  //   "coffee",
  //   "winter",
  // ];
  useEffect(() => {
    document.documentElement.dataset.theme = enabled ? "luxury" : "bumblebee";
  }, [enabled]);

  return [enabled, setDarkMode];
}
