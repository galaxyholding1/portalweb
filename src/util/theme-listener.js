import { useTheme } from "../store/theme-store";

export const themeListener = () => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = (e) => {
    console.log( "change" )
    const newTheme = e.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    useTheme.setState({ theme: newTheme });
  };

  mediaQuery.addEventListener("change", handleChange);
  const removeListener = () => mediaQuery.removeEventListener("change", handleChange);
  return removeListener;
};
