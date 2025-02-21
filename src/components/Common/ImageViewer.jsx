import React from 'react';
import { Modal } from 'antd';
import { useImageViewer } from '../../hooks/useImageViewer';

const ImageViewerModal = () => {
  const { imageSrc, closeImageViewer } = useImageViewer();

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
        width={'70%'}
        centered
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
