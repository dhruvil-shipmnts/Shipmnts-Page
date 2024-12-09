import React from 'react'
import '../ScreenShotScreen/ScreenShotLoader.css'
export default function ScreenShotLoader({title, imgSrc}) {
  return (
    <div className='screen-shot-loader'>
        <h2 className='screen-shot-title'>{title}</h2>
        <img className='screen-shot' src={imgSrc} alt="" />
    </div>
  )
}
