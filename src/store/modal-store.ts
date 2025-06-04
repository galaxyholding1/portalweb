import { Component } from 'react';
import { create } from 'zustand';

type ModalState = {
  modal: React.ReactNode;
  showModal: (component: React.ReactNode) => Promise<boolean>;
  closeModal: () => void;
  resolve: ((val: boolean) => void) | null;
  isOpen: boolean;
};

// Este estado se hizo para poder manejar los modales de forma
// asincrona, deteniendo flujos de trabajo y transfiriendo la información
// que sea necesaria entre componentes.
export const useModalStore = create<ModalState>((set) => ({
  modal: null,
  resolve: null, // Equivalente al valor de la promesa de abajo!
  isOpen: false,
  showModal: (component) => {
    return new Promise((resolve) => { // <- aqui
      set({ modal: component, isOpen: true, resolve });
    });
  },
  closeModal: () => {
    set({ modal: null, resolve: null, isOpen: false });
  },
}));
