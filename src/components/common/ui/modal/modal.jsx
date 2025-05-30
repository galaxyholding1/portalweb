import "./modal.css";
import { Select } from "../../Remittance/Select/Select";

import { motion, AnimatePresence } from "framer-motion";

import NumberInput from "../../ui/Input/NumberInput/NumberInput";
import Button from "../../ui/Input/ButtonInput/Button";
import { useModalStore } from "../../../../store/modal-store";

export const GlobalModal = () => {

  const { modal, closeModal, showModal, resolve, isOpen } = useModalStore();
  
  const handleClose = (value) => {
    resolve?.(value);
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-container"
          onClick={ handleClose }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div 
            className="global-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {modal ?? <div/>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


