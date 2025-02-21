import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useImageViewer } from '../../hooks/useImageViewer';

const ImageViewerModal = () => {
  const { imageSrc, closeImageViewer } = useImageViewer();
  const [modalWidth, setModalWidth] = useState(window.innerWidth < 768 ? '100%' : '90%');

  useEffect(() => {
    const handleResize = () => {
      setModalWidth(window.innerWidth < 768 ? '100%' : '90%');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="image-viewer-modal">
      <Modal
        open={!!imageSrc}
        footer={null}
        onCancel={closeImageViewer}
        style={{
          backgroundColor: 'transparent',
          width: 'fit-content',
        }}
        centered
        closeIcon={null}
        width={modalWidth}
      >
        <div className="modal-image-container">
          {imageSrc && (
            <img
              className="image-viewer-modal-image"
              src={imageSrc}
              alt="Preview"
              style={{ borderRadius: 8 }}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ImageViewerModal;
