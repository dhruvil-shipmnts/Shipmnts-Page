import React, { createContext, useContext, useState } from 'react';

const ImageViewerContext = createContext();

export const ImageViewerProvider = ({ children }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const openImageViewer = (src) => {
    setImageSrc(src);
  };

  const closeImageViewer = () => {
    setImageSrc(null);
  };

  return (
    <ImageViewerContext.Provider value={{ imageSrc, openImageViewer, closeImageViewer }}>
      {children}
    </ImageViewerContext.Provider>
  );
};

export const useImageViewer = () => {
  return useContext(ImageViewerContext);
};
