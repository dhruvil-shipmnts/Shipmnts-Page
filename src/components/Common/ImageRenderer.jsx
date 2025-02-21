import React from 'react';
import { useImageViewer } from '../../hooks/useImageViewer';

const ImageRenderer = ({ src, alt, className, ...rest }) => {
  const { openImageViewer } = useImageViewer();
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={className}
        {...rest}
        onClick={() => {
          openImageViewer(src);
        }}
      />
    </div>
  );
};

export default ImageRenderer;
