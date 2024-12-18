import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title-div">
          <h1 className="modal-title">{title}</h1>
          <button className="close-button" onClick={onClose}>
            x
          </button>
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default Modal;
