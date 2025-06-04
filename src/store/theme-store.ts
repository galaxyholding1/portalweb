import { create } from 'zustand'

// Obtenemos el tema actual por prioridad
// 1. Tema guardado en el local storage
// 2. Tema ya definido anteriormente
const getTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  let theme;

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    theme = savedTheme;
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const systemTheme = prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", systemTheme);
    theme = systemTheme;
  }

  return theme;
}

type ThemeStore = {
  theme: 'dark' | 'light';
  setTheme: () => void;
}

// con este estado lo que hacemos es manejar los temas 
// y las preferencias del usuario facilmente
export const useTheme = create<ThemeStore>()((set) => ({
  theme: getTheme(),
  setTheme: () => set((theme) => ({theme: theme.theme})),
}))

