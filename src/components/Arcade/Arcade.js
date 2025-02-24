import React from 'react';
import '../Arcade/Arcade.css';

export default function Arcade() {
  return (
    <section className="arcade">
      <div className="section-title-container">
        <h1 className="section-title header-2">Take a Closer Look</h1>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'block',
          height: '100%',
          minHeight: '70vh',
          width: '80vw',
        }}
      >
        <iframe
          class="arcade-collection"
          src="https://app.arcade.software/share/collections/DRgZ22NyIOKaiWYGSMu4?embed&show_copy_link=true&force_no_header=true"
          title="Experience Shipmnts"
          frameborder="0"
          loading="lazy"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          sandbox="allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups"
          allow="clipboard-write"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            'color-scheme': 'light',
          }}
        ></iframe>
      </div>
    </section>
  );
}
