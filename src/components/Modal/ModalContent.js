import React from "react";
import CarouselWrapper from "../Carousel/CarouselWrapper";
import "../Modal/ModalContent.css";

export default function ModalContent({ images, paragraphs }) {
  return (
    <div className="model-content-scroller">
      <CarouselWrapper>
        {(images || []).map((e, index) => {
          return (
            <>
              <div>
                <p className="modal-para">{paragraphs[0]}</p>
              </div>
              <div>
                <img className="model-content-image" src={e} alt="Product" />
              </div>
            </>
          );
        })}
      </CarouselWrapper>
    </div>
  );
}
