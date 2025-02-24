import React from 'react';
import CarouselWrapper from '../Carousel/CarouselWrapper';
import '../Modal/ModalContent.css';

export default function ModalContent({ items, onClose, index }) {
  return (
    <div className="screen-shot-loader">
      <CarouselWrapper slidesPerView={1} customIconStyle={{ marginTop: 0 }} initialSlide={index}>
        {(items || []).map((item, currInd) => {
          return (
            <div className="model-content-component">
              <div className="modal-title-div">
                <h2 className="screen-shot-title header-3">{item.title}</h2>
              </div>
              <div>
                <img className="model-content-image  img-border" src={item.image} alt="Product" />
              </div>
            </div>
          );
        })}
      </CarouselWrapper>
    </div>
  );
}
