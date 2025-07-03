import { useTheme } from "../store/theme-store";

export const themeListener = () => {
  // Define inicialmente el tema basado en la preferencia del usuario
  // y su dispositivo.
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = (e) => {
    const newTheme = e.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    useTheme.setState({ theme: newTheme }); // Estado global del tema
  };

  mediaQuery.addEventListener("change", handleChange);

  const removeListener = () =>
    mediaQuery.removeEventListener("change", handleChange);
  return removeListener; // Se retorna para poder limpiar
};

