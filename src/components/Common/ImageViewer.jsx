import React, { useEffect } from 'react';
import { useImageViewer } from '../../hooks/useImageViewer';

const ImageViewerModal = () => {
  const { imageSrc, closeImageViewer } = useImageViewer();

  useEffect(() => {
    if (!imageSrc) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [imageSrc]);

  if (!imageSrc) return null;

  return (
    <div className="image-viewer-overlay" onClick={closeImageViewer}>
      <button className="close-button btn-round button-large" onClick={closeImageViewer}>
        &times;
      </button>
      <div className="image-viewer-modal" onClick={(e) => e.stopPropagation()}>
        <img className="modal-image img-border" src={imageSrc} alt="Preview" />
      </div>
    </div>
  );
};

export default ImageViewerModal;
