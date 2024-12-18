import React from "react";
import "./Modal.css";
import Cross from "../Modal/x.svg"
const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title-div">
          <h1 className="modal-title">{title}</h1>
          <button className="close-button" onClick={onClose}>
            <img style={{width: '80%', height: '80%'}} src={Cross} alt="Cross" />
          </button>
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default Modal;
