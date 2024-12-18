import React, { useState, useEffect } from "react";
import "../TabScreen/TabCard.css";
import Modal from "../Modal/Modal";
import ModalContent from "../Modal/ModalContent";

export default function TabCard({ title, paragraphs, style, images }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);
  const handleModalOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Modal title={title} isOpen={isOpen} onClose={handleCloseModal}>
        <ModalContent paragraphs={paragraphs} images={images} />
      </Modal>
      <div className="tab-card" style={style}>
        <h2>{title}</h2>
        <div className="tab-button-div">
          <button className="tab-add-button" onClick={handleModalOpen}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
