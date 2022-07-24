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
  useEffect(() => {
    document.documentElement.dataset.theme = enabled ? "halloween" : "emerald";
  }, [enabled]);

  return [enabled, setDarkMode];
}
