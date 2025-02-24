import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    // Handle Escape key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <button className="close-button btn-round" onClick={onClose}>
        &times;
      </button>
      <div className="image-viewer-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
