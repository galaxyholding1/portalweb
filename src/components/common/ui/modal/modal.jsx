import "./modal.css";
import { Select } from "../../Remittance/Select/Select"; 
import { motion, AnimatePresence } from "framer-motion";
import NumberInput from "../../ui/Input/NumberInput/NumberInput"; 
import Button from "../../ui/Input/ButtonInput/Button"; 
import { useModalStore } from "../../../../store/modal-store";

export const GlobalModal = () => {
  // Destructures modal state and control functions from the modal store.
  // `modal` holds the JSX content to be displayed.
  // `closeModal` is a function to close the modal.
  // `resolve` is a function to resolve the promise associated with the modal (used for outcomes).
  // `isOpen` is a boolean indicating if the modal is currently open.
  const { modal, closeModal, resolve, isOpen } = useModalStore();
  
  // Handles closing the modal. It first calls `resolve` (if it exists) to
  // signal any pending operations that the modal is being closed, then calls `closeModal`.
  const handleClose = () => {
    resolve?.(); // Resolves the promise, potentially with no value if simply closing.
    closeModal();
  };

  return (
    // AnimatePresence manages the presence of components in the DOM for exit animations.
    <AnimatePresence>
      {/* Renders the modal only if `isOpen` is true. */}
      {isOpen && (
        <motion.div
          className="modal-container"
          onClick={ handleClose } // Clicking the overlay closes the modal.
          initial={{ opacity: 0 }} // Initial animation state (fully transparent).
          animate={{ opacity: 1 }} // Animation to open (fully opaque).
          exit={{ opacity: 0 }} // Animation to close (fade out).
        >
          <div 
            className="global-modal-content"
            onClick={(e) => e.stopPropagation()} // Prevents clicks on the modal content from bubbling up and closing the modal.
          >
            {/* Renders the dynamic content provided by the `modal` state. */}
            {modal ?? <div/>} {/* If `modal` is null/undefined, renders an empty div to avoid errors. */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};