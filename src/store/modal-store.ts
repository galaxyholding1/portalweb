import { Component } from 'react';
import { create } from 'zustand';

type ModalState = {
  modal: React.ReactNode;
  showModal: (component: React.ReactNode) => Promise<boolean>;
  closeModal: () => void;
  resolve: ((val: boolean) => void) | null;
  isOpen: boolean;
};

export const useModalStore = create<ModalState>((set) => ({
  modal: null,
  resolve: null,
  isOpen: false,
  showModal: (component) => {
    return new Promise((resolve) => {
      set({ modal: component, isOpen: true, resolve });
    });
  },
  closeModal: () => {
    set({ modal: null, resolve: null, isOpen: false });
  },
}));
