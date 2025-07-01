import { create } from 'zustand';

// Este gestor de estado maneja la información relacionada al usuario
// y a la autenticación en la aplicación
export const useAuthStore = create((set) => ({
  user: null, // Aún no se usa para nada.
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

// Provisionalmente lo que se hace para avanzar en el diseño
// es que las paginas que requieren autenticación
// automaticamente cambian el estado de autenticación a true
