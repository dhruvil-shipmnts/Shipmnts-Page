import React from 'react';
import '../Arcade/Arcade.css';

export default function Arcade() {
  return (
    <div className="arcade">
      <div className="section-title-container">
        <h1 className="section-title">Take a Closer Look</h1>
      </div>
      <div>
        <iframe
          style={{ height: '85vh', width: '90vw', border: 'none' }}
          src="https://app.arcade.software/share/Blc40KxLepDzg0az05q0"
          allowFullScreen
          title="Arcade Experience"
        ></iframe>
      </div>
    </div>
  );
}
