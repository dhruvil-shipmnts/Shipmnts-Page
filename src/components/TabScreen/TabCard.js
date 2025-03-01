import React, { useState, useEffect } from "react";
import "../TabScreen/TabCard.css";
import Modal from "../Modal/Modal";
import ModalContent from "../Modal/ModalContent";
import Plus from "../TabScreen/plus.svg";
export default function TabCard({ index, titles, paragraphs, style, images }) {
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
      <Modal isOpen={isOpen}>
        <ModalContent
          index={index}
          onClose={handleCloseModal}
          titles={titles}
          paragraphs={paragraphs}
          images={images}
        />
      </Modal>
      <div className="tab-card" style={style}>
        <h2>{titles[index]}</h2>
        <div className="tab-button-div">
          <button className="tab-add-button" onClick={handleModalOpen}>
            <img
              style={{ width: "80%", height: "80%" }}
              src={Plus}
              alt="Plus"
            />
          </button>
        </div>
      </div>
    </>
  );
}
