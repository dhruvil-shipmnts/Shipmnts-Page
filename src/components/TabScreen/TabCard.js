import React, { useState, useEffect } from 'react';
import '../TabScreen/TabCard.css';
import ModalContent from '../Modal/ModalContent';
import { Plus } from '../../assets';
import { Flex } from 'antd';
import Modal from '../Common/Modal';

export default function TabCard({ activeItem, style, items, index }) {
  const [isOpen, setIsOpen] = useState(false);
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
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalContent onClose={handleCloseModal} items={items} index={index} />
      </Modal>
      <div className="tab-card" style={style}>
        <h2>{activeItem.title}</h2>
        <Flex justify="end" className="tab-button-div">
          <div className="tab-add-button btn-round" onClick={handleModalOpen}>
            <img className="tab-add-icon " src={Plus} alt="Plus" />
            <span className="tab-add-text button-small">Read More</span>
          </div>
        </Flex>
      </div>
    </>
  );
}
