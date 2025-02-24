import React from 'react';
import '../ScreenShotScreen/ScreenShotLoader.css';
import ImageRenderer from '../Common/ImageRenderer';

export default function ScreenShotLoader({ title, imgSrc }) {
  return (
    <div className="screen-shot-loader card">
      <h2 className="screen-shot-title header-3">{title}</h2>
      <ImageRenderer className="screen-shot" src={imgSrc} alt="" />
    </div>
  );
}
