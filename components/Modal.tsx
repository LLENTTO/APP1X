import React from 'react';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void; 
  children: React.ReactNode;
}

const Model: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        {/* Correct the onClick function */}
        <label 
          onClick={() => setModalOpen(false)} 
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          X
        </label>
        {children}
      </div>
    </div>
  );
};

export default Model;
