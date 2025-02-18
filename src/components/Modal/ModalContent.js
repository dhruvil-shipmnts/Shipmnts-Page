import React from 'react';
import CarouselWrapper from '../Carousel/CarouselWrapper';
import '../Modal/ModalContent.css';
import Cross from '../Modal/x.svg';

export default function ModalContent({ index, titles, onClose, images, paragraphs }) {
  return (
    <div className="model-content-scroller">
      <CarouselWrapper>
        {(images || []).map((e, currInd) => {
          const startInd = (currInd + index) % titles.length;

          return (
            <div className="model-content-component">
              <div className="modal-title-div">
                <h1 className="modal-title">{titles[startInd]}</h1>
                <button className="close-button" onClick={onClose}>
                  <img style={{ width: '80%', height: '80%' }} src={Cross} alt="Cross" />
                </button>
              </div>
              <div>
                <p className="modal-para">{paragraphs[startInd]}</p>
              </div>
              <div>
                <img className="model-content-image" src={images[startInd]} alt="Product" />
              </div>
            </div>
          );
        })}
      </CarouselWrapper>
    </div>
  );
}
