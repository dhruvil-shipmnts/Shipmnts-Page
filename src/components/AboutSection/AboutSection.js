import React from 'react';
import "../AboutSection/AboutSection.css";
import Instagram from '../AboutSection/instagram.png'
import Facebook from '../AboutSection/facebook.png'
import Linkdin from '../AboutSection/linkdin.png'
export default function AboutSection() {
  return (
    <div id="about" className='about-section'>
      <a href="https://www.instagram.com/shipmnts_hub/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank"  rel="noreferrer"><img style={{height: '40px', marginRight: '1rem'}} src={Instagram} alt="Instagram"></img></a>
      <a href="https://www.facebook.com/shipmnts/" target="_blank"  rel="noreferrer"><img style={{height: '40px',marginRight: '1rem'}} src={Facebook} alt="Facebook"></img></a>
      <a href="https://in.linkedin.com/company/shipmnts" target="_blank"  rel="noreferrer"><img style={{height: '40px'}} src={Linkdin} alt="Linkdin"></img></a>
    </div>
  )
}
