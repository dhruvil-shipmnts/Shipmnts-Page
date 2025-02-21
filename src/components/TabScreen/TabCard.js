import React, { useState, useEffect } from 'react';
import '../TabScreen/TabCard.css';
import Modal from '../Modal/Modal';
import ModalContent from '../Modal/ModalContent';
import { Plus } from '../../assets';
import { Flex } from 'antd';

export default function TabCard({ activeItem, style, items, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);
  const handleModalOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalContent onClose={handleCloseModal} items={items} index={index} />
      </Modal>
      <div
        className="tab-card"
        style={style}
        onMouseEnter={() => setIsReadMoreVisible(true)}
        onMouseLeave={() => setIsReadMoreVisible(false)}
      >
        <h2>{activeItem.title}</h2>
        <Flex justify="end" className="tab-button-div">
          <button className="tab-add-button btn-round" onClick={handleModalOpen}>
            <img className="tab-add-icon " src={Plus} alt="Plus" />
            {isReadMoreVisible && <span className="tab-add-text">Read More</span>}
          </button>
        </Flex>
      </div>
    </>
  );
}
